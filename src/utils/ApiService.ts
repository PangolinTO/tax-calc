import axios, { isAxiosError } from "axios";
import { apiUrl } from "./constants";

const ApiService = {
  submitData: async (year: number) => {
    const formedUrl = `${apiUrl}/${year}`;
    try {
      const response = await axios.get(formedUrl);
      return response?.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return { errors: `Got error from server: ${e.status}` };
      }
      return { errors: `Got unknown error from server.` };
    }
  },
};

export default ApiService;
