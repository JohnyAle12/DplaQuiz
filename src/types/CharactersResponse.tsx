export interface CharactersResponse {
    data: {
        results: Charactersresults[];
    };
}

export interface Charactersresults {
    id:            number;
    name:          string;
    description:   string;
    resourceURI:   string;
    thumbnail:     Thumbnail;
    urls:          URLS;
}



export interface Thumbnail {
    extension:  string;
    path: string;
}

export interface URLS {
    url: string;
    type: string;
}