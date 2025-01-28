import { createContext, useState, useEffect, useContext } from 'react';
import type { ContextType } from '@repo/custom-types/contextType';

export const DataContext = createContext<ContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ContextType | undefined>(undefined);

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        const usersRes = await fetch('/api/getusers');
        const users = await usersRes.json();
        const bonusesRes = await fetch('/api/getbonuses');
        const bonuses = await bonusesRes.json();
        setData({ users, bonuses });
      };
      fetchData();
    }
  }, [data]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
