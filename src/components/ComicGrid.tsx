import { ComicItem } from './ComicItem';
import { useGetImages } from '../hooks/useGetImages';

type Props = {
    comic: string
}

const ComicGrid = ({comic}: Props) => {

    const {images, isLoading} = useGetImages(comic);
    
    return (
        <>
            <h2 className="text-center">{comic}</h2>
            
            {isLoading && (
                <h2>Cargando ...</h2>
            )}
            
            { images.map( (image, index) => <ComicItem key={index} { ...image } />) }
        </>
    );
}

export default ComicGrid;