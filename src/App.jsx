import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageGallery from "./components/ImageGallary/ImageGallery.jsx";
import { FetchData } from "./services/api.js";
import LoadMoreBtn from "./components/LoadMoreBth/LoadMoreBth.jsx"; // виправлена назва
import toast from "react-hot-toast";
import ImageModal from "./services/ImageModal.jsx"; // модалка

function App() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1); // починаємо з 1
    const [query, setQuery] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (!query.trim()) return; // 👉 не відправляти запит, якщо порожній рядок

        const getData = async () => {
            try {
                setLoading(true);
                setIsError(false);
                const data = await FetchData({ page, query });
                setImages(prev => [...prev, ...data]);
            } catch (error) {
                toast.error("Error fetching images");
                setIsError(true);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [page, query]);

    const handleChangeQuery = (query) => {
        if (!query.trim()) {
            toast.error("Please enter a search query");
            return;
        }

        toast.success(`Пошук: ${query}`);
        setQuery(query);
        setPage(1);
        setImages([]);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <SearchBar handleChangeQuery={handleChangeQuery} />
            {isError && <p style={{ color: "red" }}>Failed to fetch images. Please try again.</p>}
            <ImageGallery images={images} onImageClick={handleImageClick} />
            {loading && <Loader />}
            {!loading && images.length > 0 && (
                <LoadMoreBtn loadmore={() => setPage(prev => prev + 1)} />
            )}
            {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
        </>
    );
}

export default App;