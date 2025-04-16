import React from 'react'
import ImageCart from "./ImageCart/ImageCart.jsx";



function ImageGallery({ images, onImageClick }) {
    return (
        <ul>
            <ImageCart images={images} onImageClick={onImageClick} />
        </ul>
    );
}

export default ImageGallery;
