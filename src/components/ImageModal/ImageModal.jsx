import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ImageModal = ({ image, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!image || !image.urls || !image.urls.regular) return null;

    return (
        <Modal
            isOpen={!!image}
            onRequestClose={onClose}
            overlayClassName="overlay"
            className="modal"
        >
            <img src={image.urls.regular} alt={image.alt_description || "image"} />
        </Modal>
    );
};

export default ImageModal;
