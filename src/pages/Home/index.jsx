import { FiPlus } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from "../../components/Note";
import { Input } from "../../components/Input";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos"/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Node.js"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiPlus} type="text" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: "React", 
            tags: [
              {id: "1", name: "react"},
              {id: "2", name: "rockeseat"}
            ] 
        }}
        />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>    
  );
}
