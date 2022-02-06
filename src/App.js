import React from "react";

import Main from "./components/pages/Main";

import AppContextProvider from "./AppContextProvider";

export function App() {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}
