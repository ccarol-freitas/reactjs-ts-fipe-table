import { Select } from "@mui/material";
import { useEffect, useState } from "react";
import useCarBrand from "../../hooks/UseCarBrand";

const ButtonSelect = () => {
  const [brands, setBrands] = useState([]);

  const { response } = useCarBrand();

  useEffect(() => {
    response()
      .then((data) => {
        setBrands(data);
        console.log("..", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Select native={true} data-testid="my-wrapper" defaultValue="1">
        {console.log(brands)}
        {brands.map((brand) => {
          <option key={brand.codigo} value={brand.nome}>
            {brand.nome}
          </option>
        })}
      </Select>
    </>
  );
};

export default ButtonSelect;
