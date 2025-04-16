import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function ImageModal({ image, onClose }) {
    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.75)",
                    zIndex: 1000,
                },
                content: {
                    top: "50%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    border: "none",
                    borderRadius: "10px",
                    padding: 0,
                    background: "#fff",
                    maxWidth: "90%",
                    maxHeight: "90%",
                },
            }}
        >
            <img
                src={image.urls.regular}
                alt={image.alt_description || "Full"}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
        </ReactModal>
    );
}

export default ImageModal;