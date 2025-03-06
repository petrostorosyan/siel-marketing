"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, useState, useCallback, useEffect } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [state, setState] = useState({
    query: query,
    page: 1,
    rev: false,
    late: false,
    old: false,
    job: false,
    service: false,
    article: false,
  });

  const handleResult = useCallback((payload) => {
    setState((prev) => ({ ...prev, ...payload }));
  }, []);

  useEffect(() => {
    if (query) {
      handleResult({ search: query });
    }
  }, [query, handleResult]);

  return (
    <SearchContext.Provider value={{ state, handleResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
