import "./App.css";
import CenterSection from "./components/CenterSection/CenterSection";
import ResultsSection from "./components/ResultsSection/ResultsSection";

function App() {
  return (
    <>
      <CenterSection />

      <div className="ticks"></div>

      <ResultsSection />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
