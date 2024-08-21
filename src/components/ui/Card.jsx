import { motion } from "framer-motion";

const Card = ({ variant = "basic", header, footer, media, children }) => {
  return (
    <motion.div
      whileHover={{
        translateY: -5,
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-200"
    >
      {header && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          {header}
        </div>
      )}
      {media && <div className="overflow-hidden">{media}</div>}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
