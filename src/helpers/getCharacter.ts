import { CharactersResponse } from "../types/CharactersResponse";
import axios from "axios";
import md5 from "md5";

export type Character = {
    id: string;
    name: string;
    description: string;
    image: string;
}

const getCharacter = async(hero: string): Promise<Character[]> => {

    const publicKey = '94de8a4da334da786a897b912bbfbd4a',
        privateKey = 'ad3725ccabee5283515d1b13f629ca2c0ca8bc62',
        ts = Date.now()

    const hash = md5(ts + privateKey + publicKey);

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const { data } = await axios.get<CharactersResponse>(url);
    const result = data.data.results;

    const characters = result.map( character => ({
        id: character.id.toString(),
        name: character.name,
        description: character.description,
        image: character.thumbnail.path + '/portrait_fantastic.' + character.thumbnail.extension
    }));
    
    return characters;
}

export default getCharacter;