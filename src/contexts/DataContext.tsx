import { createContext, type Dispatch, type SetStateAction } from "react";

export type RequestData = {
  salary?: number;
  year?: number;
};

export type ResponseData = {
  tax_brackets?: TaxBracket[];
  errors?: string;
};
export type TaxBracket = {
  min: number;
  max?: number;
  rate: number;
};

export type AppTaxData = {
  currentBracket?: number;
  taxRate?: number;
};

interface IDataContext {
  data: ResponseData;
  requestData: RequestData;
  taxData: AppTaxData;
  isLoading: boolean;
  setData: Dispatch<SetStateAction<ResponseData>>;
  setRequestData: Dispatch<SetStateAction<RequestData>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setTaxData: Dispatch<SetStateAction<AppTaxData>>;
}

export const DataContext = createContext<IDataContext>({
  data: {},
  isLoading: false,
  requestData: {},
  taxData: {},
  setRequestData: () => {},
  setData: () => {},
  setIsLoading: () => {},
  setTaxData: () => {},
});
