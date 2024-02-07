import styled from "styled-components";
import Button from "../ui/Button";
import { device } from "../utils/breakpoints";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const StyledContact = styled.div`
  width: 90%;
  height: 30%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
`;

const Form = styled.form`
  max-width: 60rem;
  width: 100%;
  background-color: var(--color-grey-100);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-lg);
`;

const FormGroup = styled.div`
  width: 90%;
  max-height: 80%;
  position: relative;
`;

const Input = styled.input<{ hasError?: boolean }>`
  font-size: 1.5rem;
  width: 100%;
  width: 100%;
  border: ${(props) =>
    props.hasError
      ? "2px solid var(--color-red-700)"
      : "2px solid var(--color-grey-300)"};
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-sm);
  letter-spacing: 1.1px;

  &::placeholder {
    color: var(--color-grey-400);

    @media ${device.mobile} {
      font-size: 1.1rem;
    }
  }

  &:focus {
    outline: ${(props) =>
      !props.hasError && "2px solid var(--color-brand-600)"};
    outline-offset: -1px;
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  font-size: 1.5rem;
  min-height: 15rem;
  width: 100%;
  max-height: 50rem;
  border: ${(props) =>
    props.hasError
      ? "2px solid var(--color-red-700)"
      : "2px solid var(--color-grey-300)"};
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-sm);
  resize: vertical;

  @media ${device.mobile} {
    min-height: 5rem;
  }

  &:focus {
    outline: ${(props) =>
      !props.hasError && "2px solid var(--color-brand-600)"};
    outline-offset: -1px;
  }

  &::placeholder {
    color: var(--color-grey-400);

    @media ${device.mobile} {
      font-size: 1.1rem;
    }
  }
`;

const FormHeader = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  text-align: center;
  color: var(--color-brand-500);
  text-shadow: 3px 5px 9px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: var(--color-red-700);
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  bottom: -2.4rem;
`;

type FormData = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<FormData>();

  console.log(errors);

  async function onSubmit(data: FormData) {
    const isValid = await trigger();
    console.log(data);

    if (isValid) {
      reset();
    }
  }

  return (
    <StyledContact>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Have some questions?
          <br /> Send me message
        </FormHeader>
        <FormGroup>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
            hasError={!!errors.name}
          />

          {errors.name && (
            <ErrorMessage>
              {errors.name?.type === "required"
                ? "This field is required!"
                : ""}
              {errors.name?.type === "maxLength"
                ? "Max length is 100 characters!"
                : ""}
            </ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
            hasError={!!errors.email}
          />

          {errors.email && (
            <ErrorMessage>
              {errors.email?.type === "required" && "This field is required!"}
              {errors.email?.type === "pattern" &&
                "Please write correct email!"}
            </ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <TextArea
            rows={6}
            placeholder="Message"
            id="message"
            {...register("message", {
              required: true,
              maxLength: 100,
            })}
            hasError={!!errors.message}
          />

          {errors.message && (
            <ErrorMessage>
              {errors.message?.type === "required" && "This field is required!"}
              {errors.message?.type === "maxLength" &&
                "Max length is 100 characters!"}
            </ErrorMessage>
          )}
        </FormGroup>
        <motion.div
          //make pulse animation on initial render
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.7,
          }}
          style={{ marginBottom: "2rem" }}
        >
          <Button size="large">Send Message</Button>
        </motion.div>
      </Form>
    </StyledContact>
  );
}
export default Contact;
