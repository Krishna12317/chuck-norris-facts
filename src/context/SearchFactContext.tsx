import React, { createContext, useState, useCallback, ReactNode } from "react";
import { useTranslation } from "react-i18next";
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
  const [error, setError] = useState<string>("");
  const [currentFactIndex, setCurrentFactIndex] = useState<number>(0);
  const { t: translate } = useTranslation();

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      const fetchedFacts = await fetchChuckNorrisFacts(query);
      setFacts(fetchedFacts);
      setCurrentFactIndex(0);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(translate("apiError"));
      setFacts([]);
    }
  }, [query, translate]);

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
    setError,
    currentFactIndex,
    setCurrentFactIndex,
    setFacts,
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
