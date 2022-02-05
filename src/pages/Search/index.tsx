import ButtonConsult from "../../components/ButtonConsult";
import ButtonSelect from "../../components/ButtonSelect";
import { Container, Content } from "./styles";

const Search = (): any => {
  return (
    <Container>
      <h1>Tabela Fipe</h1>
      <h3>Consulte o valor de um veículo de forma gratuita</h3>
      <Content>
        <ButtonSelect />
        <ButtonConsult />
      </Content>
    </Container>
  );
};

export default Search;
