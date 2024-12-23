import React from "react";
import styled from "styled-components";

const SectionApresentation = styled.section`
  background-color: #4a56f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  color: white;
  padding: 3rem 1.5rem;
  padding-bottom: 18rem;
  -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1024px) {
    padding: 6rem 4.5rem;
  }

  @media screen and (min-width: 769px), print {
    padding-bottom: 18rem;
  }
`

const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;

  @media screen and (min-width: 769px), print {
    padding: 3rem 3rem;
  }
`

const Columns = styled.div`
  display: flex;
  justify-content: center;
`

const Column = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;

  @media screen and (min-width: 769px) {
    flex: none;
    width: 60%;
  }
}
`

const TitleApresentation = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  line-weight: 1.125;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem !important;
  }
`

const Description = styled.h2`
  font-weight: 400;
  line-height: 1.5;
  font-size: 1rem !important;

  @media screen and (min-width: 1024px) {
    font-size: 1.25rem !important;
  }
`

export default function ApresentationField() {
return (
  <>
    <SectionApresentation id="about-me">
      <Container>
        <Columns>
          <Column>
            <TitleApresentation>Olá, meu nome é Gabriel Estefanski.</TitleApresentation>
            <Description>Nasci em 02/06/2004, desde pequeno mexendo em computadores, aprendi a programar aos 14 anos e consegui
              meu primeiro estágio aos 16, aos 17 me formei como técnico e logo entrei na faculdade de Bacharel em Ciência da Computação,
              na qual me encontro no 6 semestre. Sempre tive sede de estudos e procurei me manter desenvolvendo cada vez mais minhas
              habilidades e progredir meu conhecimento. Hoje possuo 20 anos e sigo fazendo aquilo que gosto, que é programar.
            </Description>
          </Column>
        </Columns>
      </Container>
    </SectionApresentation>
  </>
  )
}