import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function ReusableModal({
  title,
  content,
  onClose,
  triggerText,
  buttonText,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return (
    <>
      <Button
        onClick={showModal}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none hover:bg-black/30 focus:outline-1 focus:outline-white"
      >
        {triggerText}
      </Button>

      <Dialog
        open={modalVisible}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={hideModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl transition duration-300 ease-out transform scale-95 opacity-0">
              <DialogTitle as="h3" className="text-lg font-medium text-white">
                {title}
              </DialogTitle>
              <p className="mt-2 text-sm text-white/50">{content}</p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                  onClick={() => {
                    onClose && onClose(); // If onClose is passed as a prop, call it
                    hideModal(); // Close modal
                  }}
                >
                  {buttonText}
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
