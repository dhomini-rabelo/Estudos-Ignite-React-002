import { Dialog, Transition } from '@headlessui/react'
import { X } from 'phosphor-react'
import { Fragment, useState } from 'react'

export function ModalForError() {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md p-6 transform overflow-hidden rounded-2xl bg-Gray-100 text-left align-middle shadow-xl transition-all border-solid border-pGray-400 border-2">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-Black-500"
                  >
                    <div className="flex justify-between items-center flex-wrap">
                      <strong>Erro de validação</strong>
                      <span onClick={closeModal} className="cursor-pointer">
                        <X size={24} weight="fill" />
                      </span>
                    </div>
                  </Dialog.Title>
                  <div className="mt-6 w-full">
                    <input
                      type="text"
                      name="task"
                      id="task"
                      placeholder="Altere o texto de uma tarefa"
                      required
                      className="w-full p-4 bg-pGray-500 border-solid border-pGray-700 rounded-lg mr-2 placeholder-pGray-300 text-pGray-100"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      className="w-full py-3 px-2 bg-Yellow-500 hover:bg-Yellow-800 rounded-md text-white text-sm bold leading-relaxed"
                      type="button"
                    >
                      CORRIGIR
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
