import { createContext, useState, useEffect, useContext } from 'react';
import type { ContextType } from '@repo/custom-types/contextType';

const contextDefaultValues: ContextType = {
  users: [],
  bonuses: [],
};

export const DataContext = createContext<ContextType>(contextDefaultValues);

export const DataProvider = ({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData?: unknown;
}) => {
  const [data, setData] = useState<ContextType | unknown>(initialData);

  useEffect(() => {
    if (!initialData) {
      const allData: ContextType = {
        users: [],
        bonuses: [],
      };
      const fetchData = async () => {
        const usersRes = await fetch('/api/getusers');
        allData.users = await usersRes.json();
        const bonusesRes = await fetch('/api/getbonuses');
        allData.bonuses = await bonusesRes.json();
        setData(allData);
      };
      fetchData();
    }
  }, [initialData]);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
