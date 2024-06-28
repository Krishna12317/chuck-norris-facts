export interface IChuckNorrisFact {
    icon_url: string;
    id: string;
    url: string;
    value: string;
}

export interface IChuckNorrisApiResponse {
    total: number;
    result: IChuckNorrisFact[];
}
