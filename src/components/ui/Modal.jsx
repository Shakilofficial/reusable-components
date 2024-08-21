import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const Modal = ({ size = "medium", header, footer, onClose, children }) => {
  const sizes = {
    small: "max-w-sm",
    medium: "max-w-md",
    large: "max-w-lg",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full ${sizes[size]}`}
      >
        {header && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            {header}
            <button onClick={onClose}>
              <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        )}
        <div className="p-4">{children}</div>
        {footer && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            {footer}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
