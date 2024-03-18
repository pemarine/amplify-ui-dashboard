// SortContext.tsx
import React, { useState, createContext } from 'react';

export const SortContext = createContext({
  sortOption: 'Name',
  setSortOption: (_: string) => {},
});

export const SortProvider = ({ children }) => {
  const [sortOption, setSortOption] = useState('Name');

  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};