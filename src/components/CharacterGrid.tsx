import { CharacterItem } from './CharacterItem';
import { useGetImages } from '../hooks/useGetImages';

type Props = {
    hero: string
}

const CharacterGrid = ({hero}: Props) => {

    const {images, isLoading} = useGetImages(hero);
    
    return (
        <>
            <h3>{hero}</h3>
            
            {isLoading && (
                <h2>Cargando ...</h2>
            )}
            
            { images.map( (image, index) => <CharacterItem key={index} { ...image } />) }
        </>
    );
}

export default CharacterGrid;