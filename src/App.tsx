import React from "react";
import { ThemeProvider, SearchFactProvider } from "./context";
import { Header, SearchFact } from "./components/";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SearchFactProvider>
        <Header />
        <SearchFact />
      </SearchFactProvider>
    </ThemeProvider>
  );
};

export default App;
