import React from "react";
import styled from "styled-components";
import DefaultColumns from "../../../../../../components/DefaultColumns";
import DefaultColumn from "../../../../../../components/DefaultColumn";
import Container from "../Container";


const TitleApresentation = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  line-weight: 1.125;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem !important;
  }
`

const Section = styled.section`
  background-color: #4a56f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  color: white;
  padding: 3rem 1.5rem;
  padding-bottom: 14rem;
  -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1024px) {
    padding: 6rem 4.5rem;
  }

  @media screen and (min-width: 769px), print {
    padding-bottom: 14rem;
  }
`;

const Description = styled.h2`
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem !important;

  @media screen and (min-width: 1024px) {
    font-size: 1.25rem !important;
  }
`

export default function SectionApresentation() {
  return(
    <Section id="projects">
      <Container>
      <TitleApresentation>Meus Últimos Projetos</TitleApresentation>
      <DefaultColumns>
        <DefaultColumn>
          <Description>Esses são meus últimos projetos pessoais baseado no desenvolvimento Web. Estou sempre me desafiando e me propondo coisas novas e desafios diferentes.
          Os projetos não possuem domínio próprio, então a seguir estão os links para as postagens do projeto no LinkedIn.</Description>
        </DefaultColumn>
      </DefaultColumns>
      </Container>
    </Section>
  )
}