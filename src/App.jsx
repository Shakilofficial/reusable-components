import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ReusableModal from "./components/headlessUi/ReusableModal";
import SignUpModal from "./components/headlessUi/SignUpModal";
import Avatar from "./components/ui/Avatar";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { TextInput } from "./components/ui/FormElements";
import Modal from "./components/ui/Modal";
import Toast from "./components/ui/Toast";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(true);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);
  const handleModalClose = () => setModalOpen(false);
  const handleNotificationClose = () => setNotificationVisible(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8">
        <h1 className="text-2xl font-bold mb-8">UI Components Showcase</h1>
        <button
          onClick={openSignUpModal}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Open Sign Up
        </button>

        <SignUpModal isOpen={isSignUpModalOpen} onClose={closeSignUpModal} />
        {/* Buttons */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <Button
            variant="primary"
            size="medium"
            onClick={() => alert("Primary Button Clicked!")}
          >
            Primary Button
          </Button>
          <Button variant="secondary" size="medium" className="ml-4">
            Secondary Button
          </Button>
          <Button variant="tertiary" size="medium" className="ml-4">
            Tertiary Button
          </Button>
          <Button variant="icon" size="medium" className="ml-4">
            <ArrowRightCircleIcon className="h-5 w-5" />
          </Button>
          <Button variant="link" size="medium" className="ml-4">
            Link Button
          </Button>
        </div>

        {/* Cards */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Cards</h2>
          <Card variant="basic" header="Card Header" footer="Card Footer">
            This is a basic card with a header and footer.
          </Card>
        </div>

        {/* Modals */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Modals</h2>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
          {isModalOpen && (
            <Modal
              size="medium"
              header="Modal Header"
              footer="Modal Footer"
              onClose={handleModalClose}
            >
              This is a modal example.
            </Modal>
          )}
        </div>

        {/* Form Elements */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Form Elements</h2>
          <TextInput label="Text Input" placeholder="Enter some text..." />
        </div>

        {/* Notifications */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Notifications/Toasts</h2>
          {isNotificationVisible && (
            <Toast
              variant="info"
              message="This is a success notification!"
              onClose={handleNotificationClose}
            />
          )}
        </div>

        {/* Avatars */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Avatars</h2>
          <Avatar
            variant="circular"
            size="medium"
            src="https://via.placeholder.com/150"
            alt="Avatar"
          />
          <Avatar
            variant="square"
            size="medium"
            fallbackText="JD"
            className="ml-4"
          />
        </div>
      </div>
      <ReusableModal
        title="Payment successful"
        content="Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."
        triggerText="Open Dialog"
        buttonText="Got it, thanks!"
        onClose={() => console.log("Modal closed")}
      />
    </>
  );
}

export default App;
