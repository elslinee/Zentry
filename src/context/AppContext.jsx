import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <AppContext.Provider value={{ soundOn, setSoundOn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
