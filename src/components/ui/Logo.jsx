// src/components/ui/Logo.jsx
import { motion } from "framer-motion";

const Logo = ({ size = "md", variant = "primary" }) => {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
  };
  const variants = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  };

  return (
    <motion.div
      className={`font-bold ${sizes[size]} ${variants[variant]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Checkmate
    </motion.div>
  );
};

export default Logo;
