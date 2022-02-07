import { Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ContextShowFields } from "../../context/ContextShowFields";
import useCarYearResultsData from "../../hooks/UseCarYear";

interface Year {
  nome: string;
  codigo: string;
}

const ButtonSelectYears = () => {
  const { activeField, setActiveField } = useContext(ContextShowFields);

  const [years, setYears] = useState<Year[]>([]);

  const { response } = useCarYearResultsData();

  useEffect(() => {
    response()
      .then((data) => {
        setYears(data);
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
        onChange={() => {
          setActiveField(true);
        }}
      >
        {years.map((year, index) => (
          <option key={index} value={year.nome} id={year.codigo}>
            {year.nome}
          </option>
        ))}
      </Select>
    </>
  );
};

export default ButtonSelectYears;
