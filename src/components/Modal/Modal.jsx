import { forwardRef } from "react";

const Modal = forwardRef(({ onClose, children }, ref) => {
    return (
        <div>
            <dialog
                ref={ref}
                onClose={onClose}
                className="fixed flex flex-col w-full md:w-3/5 p-4 mx-auto items-center justify-center
            bg-white bg-opacity-80 my-auto backdrop:bg-black backdrop:bg-opacity-60 backdrop-blur-md rounded-2xl"
            >
                {children}
            </dialog>
        </div>
    );
});

export default Modal;
