import { ComicDataWrapper } from '../types/ComicResponse';
import axios from "axios";
import md5 from "md5";

export type Comic = {
    id: string;
    title: string;
    description?: string;
    image: string;
}

const getComics= async(comic: string): Promise<Comic[]> => {

    const publicKey = '94de8a4da334da786a897b912bbfbd4a',
        privateKey = 'ad3725ccabee5283515d1b13f629ca2c0ca8bc62',
        ts = Date.now()

    const hash = md5(ts + privateKey + publicKey);

    const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${comic}`;
    const { data } = await axios.get<ComicDataWrapper>(url);
    const result = data.data.results;

    const comics = result.map( comic => ({
        id: comic.id.toString(),
        title: comic.title,
        description: comic.description,
        image: comic.thumbnail.path + '/portrait_fantastic.' + comic.thumbnail.extension
    }));
    
    return comics;
}

export default getComics;