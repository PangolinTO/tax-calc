import { DataContext } from "@contexts/DataContext";
import { useState } from "react";
import CenterSection from "./components/CenterSection/CenterSection";
import ResultsSection from "./components/ResultsSection/ResultsSection";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [requestData, setRequestData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [taxData, setTaxData] = useState({});
  return (
    <DataContext.Provider
      value={{
        data,
        requestData,
        isLoading,
        taxData,
        setData,
        setRequestData,
        setIsLoading,
        setTaxData,
      }}
    >
      <CenterSection />
      <div className="ticks"></div>
      <ResultsSection />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </DataContext.Provider>
  );
}

export default App;
