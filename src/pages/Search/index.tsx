import { useContext } from "react";
import ButtonConsult from "../../components/ButtonConsult";
import ButtonSelectBrands from "../../components/ButtonSelectBrands";
import ButtonSelectModels from "../../components/ButtonSelectModels";
import ButtonSelectYears from "../../components/ButtonSelectYears";
import { ContextShowFields } from "../../context/ContextShowFields";
import { Container, Content } from "./styles";

const Search = (): any => {
  const { showFieldModels, showFieldYears } = useContext(ContextShowFields);

  return (
    <Container>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor de um veículo de forma gratuita</h3>
      <Content>
        <div>
          <ButtonSelectBrands />
        </div>
        {showFieldModels && (
          <div>
            <ButtonSelectModels />
          </div>
        )}
        {showFieldYears && (
          <div>
            <ButtonSelectYears />
          </div>
        )}
        <div>
          <ButtonConsult />
        </div>
      </Content>
    </Container>
  );
};

export default Search;
