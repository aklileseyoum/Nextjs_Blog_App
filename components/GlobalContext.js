// context/GlobalContext.js

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState([]);

  const updateGlobalData = (data) => {
    setGlobalData((prevGlobalData) => [...prevGlobalData, ...data]);
  };

  return (
    <GlobalContext.Provider value={{ globalData, updateGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
