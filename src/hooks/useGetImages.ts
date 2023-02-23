import { useState, useEffect } from 'react';
import getCharacter, { Character } from '../helpers/getCharacter';

export const useGetImages = (character: string) => {
    const [images, setImages] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const images = await getCharacter(character);
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
