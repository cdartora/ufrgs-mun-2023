import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import noImage from "../assets/about/no-image.jpg";
import dialog from "../assets/about/dialog.svg";

function TeamCard({ teamMember: { image, name, description } }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    if (description) {
      setIsOpen(true);
    }
  }

  return (
    <>
      <li
        onClick={openModal}
        className="relative rounded-md p-3 flex flex-col justify-start items-center gap-2 hover:bg-white/[0.12] cursor-pointer"
      >
        <div className="h-16 w-16 rounded-full overflow-hidden flex justify-center items-center relative">
          <img src={image ? image : noImage} alt={`${name} foto`} />
        </div>
        {description && (
          <img
            src={dialog}
            alt="balão de texto"
            width={35}
            className="absolute top-2 right-5"
          />
        )}
        <h3 className="text-sm font-medium leading-5 text-white text-center">
          {name}
        </h3>
      </li>

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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <h3 className="font-extrabold text-xl text-green-text">
                      {name}
                    </h3>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
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

export default TeamCard;
