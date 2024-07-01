export interface IChuckNorrisFact {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

export interface IChuckNorrisApiResponse {
    total: number;
    result: IChuckNorrisFact[];
}

export interface ISearchFactContext {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    facts: IChuckNorrisFact[];
    loading: boolean;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string>>;
    currentFactIndex: number;
    setCurrentFactIndex: React.Dispatch<React.SetStateAction<number>>;
    setFacts: React.Dispatch<React.SetStateAction<IChuckNorrisFact[]>>;
    handleSearch: () => void;
    handleNextFact: () => void;
    handlePreviousFact: () => void;
}

export interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
}
