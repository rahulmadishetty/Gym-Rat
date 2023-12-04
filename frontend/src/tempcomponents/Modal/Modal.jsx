import React from "react";


const Modal = ({ isOpen, onClose, children, handleFormSubmit }) => {
    console.log(isOpen)
    if (!isOpen) return null;

    return (
        <dialog open={isOpen} className="modal d-flex justify-content-center align-items-center">
            <div className="modal-content p-4 h-auto">
                {children}
                {/* <div className="d-flex align-items-center justify-content-between">
                <h2>Squats</h2>
                <FontAwesomeIcon className="cursor-pointer" icon={faCircleXmark} />
                </div>
                
                <p className="card-text">
                    <strong>Reps:</strong> 2 <br />
                    <strong>Muscle Targeted:</strong> Legs <br />
                    <strong>Time:</strong> 15 mins
                </p>
                <iframe className="mb-3 mt-2" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <button className="btn my-2 primary-btn">Completed</button> */}
            </div>
        </dialog>
    )
};

export default Modal;