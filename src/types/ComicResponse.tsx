export interface ComicDataWrapper {
    data: {
        results: Comic[]
    };
}

export interface Comic {
    id: number;
    title: string;
    description?: string;
    thumbnail: Image;
    creators: CreatorList;
    series: SeriesSummary;
    dates: ComicDate
}

export interface Image {
    extension: string;
    path: string;
}

export interface CreatorList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CreatorSummary;
}

export interface CreatorSummary {
    resourceURI?: string;
    name?: string;
    role?: string;
}

export interface SeriesSummary {
    resourceURI?: string;
    name?: string;
}

export interface ComicDate {
    type?: string;
    date?: Date;
}