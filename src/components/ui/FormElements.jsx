// src/components/ui/FormElements.js

export const Input = ({ label, type = "text", placeholder, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
      {...props}
    />
  </div>
);

export const TextInput = ({ label, placeholder, ...props }) => (
  <div className="mb-4">
    {label && (
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
    )}
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
      {...props}
    />
  </div>
);

export const TextArea = ({ label, placeholder, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      placeholder={placeholder}
      className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
      {...props}
    />
  </div>
);

export const Checkbox = ({ label, ...props }) => (
  <div className="flex items-center mb-4">
    <input
      type="checkbox"
      className="h-4 w-4 text-primary dark:text-secondary border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary"
      {...props}
    />
    <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
      {label}
    </label>
  </div>
);
