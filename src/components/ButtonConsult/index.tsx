import { Button } from "@mui/material";

const ButtonConsult = (): any => {
  const handleSubmit = (): void => {
    window.location.pathname = "/result";
  };
  return (
    <>
      <Button variant="contained" disableElevation onClick={handleSubmit}>
        Consultar preço
      </Button>
    </>
  );
};

export default ButtonConsult;
