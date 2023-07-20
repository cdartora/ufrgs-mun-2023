import { useState, Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

function TopicButton({ title, data, imgUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="shadow-lg rounded-xl bg-brand-dark p-4 px-6 font-extrabold text-white text-xs text-center"
      >
        {title}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-y-auto max-h-[70vh] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-col items-center"
                  >
                    <img
                      src={imgUrl}
                      className="w-40"
                      draggable="false"
                      style={{ userSelect: "none" }}
                      onMouseDown={() => false}
                    />
                    <h3 className="font-extrabold text-xl text-green-text text-center">
                      {data.title}
                    </h3>

                    <h4 className="text-green-text text-sm">{title}</h4>
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{data.description}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default TopicButton;
