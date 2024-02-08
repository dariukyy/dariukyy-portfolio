import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionDivProps = {
  children: ReactNode;
};

const MotionDiv = ({ children }: MotionDivProps) => (
  <motion.div
    initial={{ opacity: 0, x: 300 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default MotionDiv;
