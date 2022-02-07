import { useCallback } from "react";
import api from "../service/api";

const useCarModels = async (brandId: string) => {
  try {
    const response = await api.get(`/marcas/${brandId}/modelos`);
    const { data } = response;
    if (!data) {
      console.error("Ocorreu um erro em modelos!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarModelsResultsData = (brandId: string) => {
  const response = useCallback(async () => {
    const data = await useCarModels(brandId);
    return data;
  }, [useCarModels]);
  return { response };
};

export default useCarModelsResultsData;
