// components/common/Modal/page.jsx

const Modal = ({ onClose }) => {
  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white px-6 py-4 rounded shadow-lg text-center w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-2">Product Updated</h2>
        <p className="mb-4">Your changes have been saved successfully.</p>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </main>
  );
};

export default Modal;

// bg-black/50 is the new Tailwind v3+ syntax for 50% black (transparent) background.

// inset-0 = top-0 left-0 bottom-0 right-0 to cover the full screen.

// z-50 ensures the modal appears above other content.
