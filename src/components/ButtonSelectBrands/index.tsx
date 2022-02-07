import { Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ContextShowFields } from "../../context/ContextShowFields";
import useCarBrandResultsData from "../../hooks/UseCarBrand";

interface Brand {
  nome: string;
  codigo: string;
}

const ButtonSelectBrands = () => {
  const { showFieldModels, setShowFieldModels } = useContext(ContextShowFields);

  const [brands, setBrands] = useState<Brand[]>([]);

  const { response } = useCarBrandResultsData();

  useEffect(() => {
    response()
      .then((data) => {
        setBrands(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Select
        native={true}
        data-testid='my-wrapper'
        defaultValue='1'
        onChange={(e) => {
          setShowFieldModels(!showFieldModels);
          console.log(e.target.value);
        }}
      >
        {brands.map((brand, index) => (
          <option key={index} value={brand.nome} id={brand.codigo}>
            {brand.nome}
          </option>
        ))}
      </Select>
    </>
  );
};

export default ButtonSelectBrands;
