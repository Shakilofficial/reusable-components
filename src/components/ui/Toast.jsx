import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Toast = ({
  variant = "info",
  message,
  autoDismiss = true,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, duration, onClose]);

  const icons = {
    success: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
    error: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />,
    warning: <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />,
    info: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="fixed top-4 right-4 bg-white dark:bg-gray-800 border-l-4 rounded-lg shadow-lg flex items-center p-4"
    >
      {icons[variant]}
      <div className="ml-3">
        <p className="text-sm text-gray-700 dark:text-gray-300">{message}</p>
      </div>
      <button onClick={onClose} className="ml-4 bg-gray-300 p-1 rounded-full">
        <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </button>
    </motion.div>
  );
};

export default Toast;
