import { useContext, useEffect } from "react";
import { DataContext } from "@contexts/DataContext";
import { CircularProgress } from "react-loader-spinner";
import "./styles.css";
import TaxRateUtil from "@utils/TaxRateUtil";

const ResultsSection: React.FC = () => {
  const { data, requestData, taxData, isLoading, setTaxData } =
    useContext(DataContext);
  const visibilityConditions = Object.keys(data)?.length > 0 && !isLoading;
  useEffect(() => {
    if (visibilityConditions && data?.tax_brackets && !data.errors) {
      const taxValues = TaxRateUtil.calc(requestData, data.tax_brackets);
      setTaxData(taxValues);
    }
  }, [data, requestData, visibilityConditions, setTaxData]);
  return (
    <section id="results">
      {isLoading && (
        <CircularProgress height="100" width="100" color="#0098ca" />
      )}
      {visibilityConditions && !data.errors && (
        <div id="values">
          <h2>Your calculated tax rate: {taxData.currentBracket}%</h2>
          <h2>
            Your tax burden for {requestData.year}: ${taxData.taxRate}
          </h2>
          <h2>
            Your take-home amount:{" $"}
            {requestData.salary &&
              taxData.taxRate &&
              requestData.salary - taxData.taxRate}
          </h2>
        </div>
      )}
      {visibilityConditions && data.errors && (
        <div id="error">
          <p>{data.errors}</p>
        </div>
      )}
    </section>
  );
};

export default ResultsSection;
