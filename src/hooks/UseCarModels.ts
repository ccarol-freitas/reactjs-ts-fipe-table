import { useCallback } from "react";
import api from "../service/api";

const useCarModels = async (id: string) => {
  try {
    const response = await api.get(`/marcas/${id}/modelos`);
    const { data } = response;
    if (!data) {
      console.error("Ocorreu um erro em modelos!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarModelsResultsData = (id: string) => {
  const response = useCallback(async () => {
    const data = await useCarModels(id);
    return data;
  }, [useCarModels]);
  return { response };
};

export default useCarModelsResultsData;
