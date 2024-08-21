import { motion } from "framer-motion";
const Avatar = ({
  variant = "circular",
  size = "medium",
  src,
  alt,
  fallbackText = "A",
  border = false,
}) => {
  const sizes = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
  };

  const shapeStyles = {
    circular: "rounded-full",
    square: "rounded-lg",
  };

  return (
    <motion.div
      className={`${sizes[size]} ${shapeStyles[variant]} ${
        border && "border-2 border-gray-300"
      } bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden`}
      whileHover={{ scale: 1.1 }}
    >
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {fallbackText}
        </span>
      )}
    </motion.div>
  );
};

export default Avatar;
