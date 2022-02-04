import { Select } from "@mui/material";
import { useEffect, useState } from "react";
import useCarBrand from "../../hooks/UseCarBrand";

const ButtonSelect = (): any => {
  const [brandDatas, setBrandDatas] = useState([{}]);

  const { response } = useCarBrand();

  useEffect(() => {
    response()
      .then((data) => {
        if (data) {
          setBrandDatas(
            data.map(() => {
              // console.log("-->", item.nome);
              // console.log("--=", item.codigo);
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {brandDatas.map((item, index) => {
        <Select native={true} data-testid="my-wrapper" defaultValue="1">
          <option key={index}></option>
        </Select>;
      })}
    </>
  );
};

export default ButtonSelect;
