"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export const FadeUp = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
};
