import type { RequestData, TaxBracket } from "@contexts/DataContext";

const TaxRateUtil = {
  calc: (requestData: RequestData, data: TaxBracket[]) => {
    if (requestData.salary === 0)
      return {
        currentBracket: data[0]?.rate * 100,
        taxRate: requestData.salary * data[0]?.rate,
      };
    const currentBracket = data.filter((bracket) => {
      if (requestData.salary) {
        return (
          requestData.salary >= bracket.min &&
          requestData.salary < (bracket.max || Number.MAX_SAFE_INTEGER)
        );
      }
    });
    return {
      currentBracket: currentBracket[0]?.rate * 100,
      taxRate:
        requestData.salary && requestData.salary * currentBracket[0]?.rate,
    };
  },
};

export default TaxRateUtil;
