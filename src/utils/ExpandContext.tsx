// ExpandContext.tsx
import React from 'react';

export const ExpandContext = React.createContext({
  expand: false,
  setExpand: (_: boolean) => {},
});