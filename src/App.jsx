import React, { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageGallery from "./components/ImageGallary/ImageGallery.jsx";
import {FetchData} from "./services/api.js";
import LoadMoreBth from "./components/LoadMoreBth/LoadMoreBth.jsx";
import toast from "react-hot-toast";
import ImageModal from "./services/ImageModal.jsx"; // Импорт модального окна

function App() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // новое состояние для модалки

    useEffect(() => {
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
        toast("New query");
        setQuery(query);
        setPage(0);
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
            <ImageGallery images={images} onImageClick={handleImageClick} />
            {loading && <Loader />}
            {!loading && <LoadMoreBth loadmore={() => setPage(prev => prev + 1)} />}
            {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
        </>
    );
}

export default App;