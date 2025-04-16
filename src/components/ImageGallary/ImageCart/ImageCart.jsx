import React from 'react';

function ImageCart({ images, onImageClick }) {
    return (
        <>
            {images.map((item) => (
                <li key={item.id} style={{ marginBottom: "20px" }}>
                    <img
                        src={item.urls.small}
                        alt={item.alt_description || "Unsplash Image"}
                        style={{ width: "200px", borderRadius: "8px", cursor: "pointer" }}
                        onClick={() => onImageClick(item)} // 👈 добавляем клик
                    />
                </li>
            ))}
        </>
    );
}

export default ImageCart;