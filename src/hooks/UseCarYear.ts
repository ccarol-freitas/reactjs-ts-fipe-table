import { useCallback } from "react";
import api from "../service/api";

const useCarYear = async () => {
  try {
    const response = await api.get(`/marcas/59/modelos/5940/anos`);
    const { data } = response;
    if (!data) {
      console.error("Ocorreu um erro em anos!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarYearResultsData = () => {
  const response = useCallback(async () => {
    const data = await useCarYear();
    return data;
  }, [useCarYear]);
  return { response };
};

export default useCarYearResultsData;
