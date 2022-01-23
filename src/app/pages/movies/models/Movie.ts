export interface MovieInterface {
    id: number;
    name: string;
    year: number;
    poster: string;
    crawl: string;
    filmMakers: [{
        name: string;
        role: string;
    }]
}