import { Container, Links, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir a nota" />

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, culpa! Eligendi temporibus laboriosam illo vel repellendus, fuga vero sit beatae dolorem cum neque velit rem quidem eaque ut architecto nam quasi quibusdam. Quis mollitia error non a veritatis sunt repellendus maiores suscipit facilis dolor sequi et commodi nobis at minus magnam odit consequatur in quos, officia incidunt laudantium cupiditate ex quod. Repudiandae, laboriosam? Cum mollitia sunt similique alias modi quis fugit totam, magni optio aliquid, beatae atque reiciendis labore veritatis!</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        
        </Content>
      </main>
    </Container>
  );
}
