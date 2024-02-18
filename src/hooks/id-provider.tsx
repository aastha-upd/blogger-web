import React, { ReactNode } from 'react';

interface IdContextProps {
  id: string;
  setId: (id: string) => void;
}

const IdContext = React.createContext<IdContextProps | undefined>(undefined);

export const IdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [id, setId] = React.useState<string>('');

  return <IdContext.Provider value={{ id, setId }}>{children}</IdContext.Provider>;
};

export const useId = () => {
  const context = React.useContext(IdContext);
  if (!context) {
    throw new Error('useId must be used within a IdProvider');
  }
  return context;
};
