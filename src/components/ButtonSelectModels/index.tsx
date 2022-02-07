import { Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ContextShowFields } from "../../context/ContextShowFields";
import useCarModelsResultsData from "../../hooks/UseCarModels";

interface Model {
  nome: string;
  codigo: string;
}

const ButtonSelectModels = () => {
  const { showFieldYears, setShowFieldYears } = useContext(ContextShowFields);

  const [models, setModels] = useState<Model[]>([]);

  const { response } = useCarModelsResultsData("59");

  useEffect(() => {
    response()
      .then((data) => {
        setModels(data.modelos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Select
        native={true}
        data-testid="my-wrapper"
        defaultValue="1"
        onChange={() => {
          setShowFieldYears(!showFieldYears);
        }}
      >
        {models.map((model, index) => (
          <option key={index} value={model.nome} id={model.codigo}>
            {model.nome}
          </option>
        ))}
      </Select>
    </>
  );
};

export default ButtonSelectModels;
