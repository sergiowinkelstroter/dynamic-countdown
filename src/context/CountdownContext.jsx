import { createContext, useState } from "react";

export const CountdownContext = createContext({});

export const CountdownProvider = ({ children }) => {
  const [event, setEvent] = useState(null);

  return (
    <CountdownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountdownContext.Provider>
  );
};
