import { useCallback } from "react";
import api from "../service/api";

const useCarBrand = async () => {
  try {
    const response = await api.get("/marcas");
    const { data } = response;
    if (!data) {
      console.error("Ocorreu um erro em marcas!");
    }
    console.log("-->", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const useCarBrandResultsData = () => {
  const response = useCallback(async () => {
    const data = await useCarBrand();
    return data;
  }, [useCarBrand]);
  return { response };
};

export default useCarBrandResultsData;
