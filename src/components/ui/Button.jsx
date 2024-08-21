import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  children,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition duration-200";

  const sizes = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    tertiary:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
    icon: "bg-transparent text-gray-600 hover:text-gray-800 p-2",
    link: "text-blue-600 hover:underline",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path fill="currentColor" d="M4 12a8 8 0 018-8"></path>
        </svg>
      ) : (
        children
      )}
      {variant === "icon" && <ArrowRightCircleIcon className="h-5 w-5 ml-2" />}
    </motion.button>
  );
};

export default Button;
