import { useCallback } from "react";
import api from "../service/api";

const useCarYear = async () => {
  try {
    const res = await api.get("/marcas/59/modelos/5940/anos");
    const { data } = res;
    if (!data) {
      console.error("Ocorreu um erro em anos!");
    }
    console.log("sucesso anos", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarYearResultsData = () => {
  const res = useCallback(async () => {
    const data = await useCarYear();
    return data;
  }, [useCarYear]);
  return { res };
};

export default useCarYearResultsData;
