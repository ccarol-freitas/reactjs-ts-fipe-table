import { useCallback } from "react";
import api from "../service/api";

const useCarModels = async () => {
  try {
    const res = await api.get("/marcas/59/modelos");
    const { data } = res;
    if (!data) {
      console.error("Ocorreu um erro em modelos!");
    }
    console.log("sucesso modelos", data)
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarModelsResultsData = () => {
  const res = useCallback(async () => {
    const data = await useCarModels();
    return data;
  }, [useCarModels]);
  return { res };
};

export default useCarModelsResultsData;
