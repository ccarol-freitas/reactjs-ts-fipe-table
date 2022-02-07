import { useCallback } from "react";
import api from "../service/api";

const useCarYear = async (brandId: string)  => {
  try {
    const response = await api.get(`/marcas/${brandId}/modelos/5940/anos`);
    const { data } = response;
    if (!data) {
      console.error("Ocorreu um erro em anos!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarYearResultsData = (brandId: string)  => {
  const response = useCallback(async () => {
    const data = await useCarYear(brandId);
    return data;
  }, [useCarYear]);
  return { response };
};

export default useCarYearResultsData;
