import React from 'react'
import ImageCart from "./ImageCart/ImageCart.jsx";


function ImageGallery({ images, onImageClick }) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {images.map((image) => (
                <ImageCart key={image.id} image={image} onImageClick={onImageClick} />
            ))}
        </ul>
    );
}

export default ImageGallery;
