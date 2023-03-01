const Modal = ({ modalComponent, showModal, setShowModal }) => {
  return (
    <div>
      {showModal ? (
        <div className="flex justify-center inset-1/4 absolute items-center overflow-x-hidden overflow-y-auto z-20 ">
          <div className=" border-2 border-t-white border-l-white border-darkGrey relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start bg-darkBlue justify-between pl-1 border-b ">
              <span className="text-md text-white font=semibold">
                Study timer
              </span>
              <button
                className="bg-transparent float-right"
                onClick={() => setShowModal(false)}
              >
                <span className="text-black flex justify-center items-center bg-lightGrey  h-6 w-6 text-xl block">
                  x
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto bg-lightGrey">
              {modalComponent}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
