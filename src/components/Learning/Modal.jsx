import React from "react";

const Modal = ({ children, shown, close }) => {
    return shown ? (
        <div
            className="modal-backdrop"
            onClick={() => {
                close();
            }}
        >
            <div
                className="modal-content"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <button onClick={close}>Close</button>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
