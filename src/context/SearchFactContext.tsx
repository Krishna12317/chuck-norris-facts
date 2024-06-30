import React, { createContext, useState, useCallback, ReactNode } from "react";
import { fetchChuckNorrisFacts } from "../api/chuckNorrisAPI";
import { IChuckNorrisFact, ISearchFactContext } from "../types";

const SearchFactContext = createContext<ISearchFactContext | undefined>(
  undefined
);

export const SearchFactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>("");
  const [facts, setFacts] = useState<IChuckNorrisFact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentFactIndex, setCurrentFactIndex] = useState<number>(0);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedFacts = await fetchChuckNorrisFacts(query);
      setFacts(fetchedFacts);
      setCurrentFactIndex(0);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(
        "Failed to fetch Chuck Norris facts. Please try again with at least 3 characters"
      );
      setFacts([]);
    }
  }, [query]);

  const handleNextFact = useCallback(() => {
    setCurrentFactIndex((prevIndex) =>
      prevIndex < facts.length - 1 ? prevIndex + 1 : 0
    );
  }, [facts.length]);

  const handlePreviousFact = useCallback(() => {
    setCurrentFactIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : facts.length - 1
    );
  }, [facts.length]);

  const value: ISearchFactContext = {
    query,
    setQuery,
    facts,
    loading,
    error,
    currentFactIndex,
    setCurrentFactIndex,
    handleSearch,
    handleNextFact,
    handlePreviousFact,
  };

  return (
    <SearchFactContext.Provider value={value}>
      {children}
    </SearchFactContext.Provider>
  );
};

export default SearchFactContext;
