import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

const Modal = ({children, open, handleCloseModal, handleOpenModal}) => {
    return (
        <div>
            <ReactModal
                className="ReactModal__Content"
                overlayClassName="ReactModal__Overlay"
                shouldCloseOnOverlayClick={true}
                isOpen={open}
                onRequestClose={handleCloseModal}
            >
                {
                    React.cloneElement(children, { onCloseModal: handleCloseModal })
                }
            </ReactModal>
        </div>
    );
};

export default Modal;
