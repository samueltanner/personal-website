import React from "react";

const GlobalContext = React.createContext({
  currentWindow: "timeline",
  setCurrentWindow: () => {},
});

export default GlobalContext;
