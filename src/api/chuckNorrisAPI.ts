import axios from 'axios';
import { IChuckNorrisFact, IChuckNorrisApiResponse } from '../types';

export const fetchChuckNorrisFacts = async (query: string): Promise<IChuckNorrisFact[]> => {
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    const response = await axios.get<IChuckNorrisApiResponse>(url);
    return response.data.result || [];
};
