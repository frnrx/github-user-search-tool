import React from "react";
import DevFinderPage from "./pages/DevFinder";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <DevFinderPage />
    </ThemeProvider>
  );
};

export default App;
