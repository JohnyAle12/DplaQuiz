import { useState, useEffect } from 'react';
import getComics, { Comic } from '../helpers/getComics';

export const useGetImages = (character: string) => {
    const [images, setImages] = useState<Comic[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const images = await getComics(character);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
