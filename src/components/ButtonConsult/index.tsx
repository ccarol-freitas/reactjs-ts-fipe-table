import { Button } from "@mui/material";
import { useContext } from "react";
import { ContextShowFields } from "../../context/ContextShowFields";

const ButtonConsult = (): any => {
  const handleSubmit = (): void => {
    window.location.pathname = "/result";
  };

  const { activeField } = useContext(ContextShowFields);

  return (
    <>
      <Button
        variant='contained'
        disabled={!activeField}
        onClick={handleSubmit}
      >
        Consultar preço
      </Button>
    </>
  );
};

export default ButtonConsult;
