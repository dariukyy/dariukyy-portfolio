// React imports
import { useRef, useState } from "react";

// Third-party imports
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Local imports
import { Form, FormGroup, FormHeader } from "./Form";
import { ErrorMessage, Input } from "./Input";
import TextArea from "./TextArea";
import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";
import SpinnerMini from "../../ui/SpinnerMini";
import Button from "../../ui/Button";

// Styled components
const StyledContact = styled.section`
  width: 90%;
  height: 30%;
  z-index: 2;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

// Types
type FormData = {
  name: string;
  email: string;
  message: string;
};

declare global {
  interface ImportMetaEnv {
    VITE_APP_SERVICE_KEY: string;
    VITE_APP_TEMPLATE_ID: string;
    VITE_APP_PUBLIC_KEY: string;
  }
}

const SERVICE_KEY = import.meta.env.VITE_APP_SERVICE_KEY;
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY;

// Component
function ContactComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  function onSubmit(data: FormData) {
    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(SERVICE_KEY, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success(
              `Message sent successfully, ${capitalizeFirstLetter(data.name)}!`
            );
            setIsLoading(false);
            reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Message not sent. Please try again later!");
          }
        );
    }
  }

  const shakeAnimation = {
    rest: {
      x: 0,
      transition: { type: "spring", stiffness: 1000, damping: 20 },
    },
    shake: {
      x: [-10, 10, -10, 10, -10, 10, -10, 10, -10, 10, 0],
      transition: { type: "spring", stiffness: 1000, damping: 20 },
    },
  };

  return (
    <StyledContact>
      <Form
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormHeader
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          Let's Collaborate!
        </FormHeader>
        <FormGroup>
          <motion.div
            variants={shakeAnimation}
            initial="rest"
            animate={errors.name ? "shake" : "rest"}
          >
            <Input
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              type="text"
              placeholder="Name"
              id="name"
              disabled={isLoading}
              {...register("name", { required: true, maxLength: 100 })}
              $hasError={!!errors.name}
            />
          </motion.div>
          {errors.name && (
            <ErrorMessage>
              {errors.name?.type === "required"
                ? "This field is required!"
                : "Max length is 100 characters!"}
            </ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <motion.div
            variants={shakeAnimation}
            initial="rest"
            animate={errors.email ? "shake" : "rest"}
          >
            <Input
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55 }}
              type="text"
              placeholder="Email"
              id="email"
              disabled={isLoading}
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              $hasError={!!errors.email}
            />
          </motion.div>
          {errors.email && (
            <ErrorMessage>
              {errors.email?.type === "required"
                ? "This field is required!"
                : "Please write correct email!"}
            </ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <motion.div
            variants={shakeAnimation}
            initial="rest"
            animate={errors.message ? "shake" : "rest"}
          >
            <TextArea
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75 }}
              rows={4}
              placeholder="Message"
              id="message"
              disabled={isLoading}
              {...register("message", { required: true, maxLength: 100 })}
              $hasError={!!errors.message}
            />
          </motion.div>
          {errors.message && (
            <ErrorMessage>
              {errors.message?.type === "required"
                ? "This field is required!"
                : "Max length is 100 characters!"}
            </ErrorMessage>
          )}
        </FormGroup>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.95 }}
          style={{ marginBottom: "2rem" }}
        >
          <Button disabled={isLoading} size="large">
            {isLoading ? <SpinnerMini /> : "Send Message"}
          </Button>
        </motion.div>
      </Form>
    </StyledContact>
  );
}

export default ContactComponent;
