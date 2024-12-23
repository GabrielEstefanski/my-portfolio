import React from "react";
import styled from "styled-components";
import Title from "../Title";

const StyledFooter = styled.footer`
  background-color: #4a56f9;
  color: white;
`;

const Container = styled.div`
  max-width: 1340px;
  margin: auto;
  width: 90%;
`;
  
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Lower = styled.div`
  padding: 2.5rem 0;
  border-top: 1px solid #fff;
  text-align: center;
  font-size: 0.9rem;
`;

const FirstRow = styled.div`
  width: 40%;
  order: 1;
  max-width: 400px;
  text-align: left;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

const SecondRow = styled.div`
  width: 40%;
  order: 2;
  max-width: 400px;
  text-align: left;

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;

const LinkButton = styled.a`
  margin-right: 1.5rem;
`;

const Image = styled.i`
  font-size: 30px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Main>
          <FirstRow>
            <Title>GABRIEL BRAGA ESTEFANSKI</Title>
            <p>
              Desenvolvedor fullstack, apaixonado por tecnologia e inovação. Orientado a resultados e focado em soluções.
            </p>
          </FirstRow>
          <SecondRow>
            <Title>SOCIAL</Title>
            <div>
              <LinkButton href="https://www.linkedin.com/in/gabriel-estefanski/" target="_blank" rel="noopener noreferrer">
                <Image className="fa fa-linkedin"></Image>
              </LinkButton>
              <LinkButton href="https://github.com/GabrielEstefanski" target="_blank" rel="noopener noreferrer">
                <Image className="fa fa-github"></Image>
              </LinkButton>
              <LinkButton href="https://api.whatsapp.com/send?phone=5512978113054" target="_blank" rel="noopener noreferrer">
                <Image className="fa fa-phone"></Image>
              </LinkButton>
              <LinkButton href="mailto:gbraga2004@outlook.com" target="_blank" rel="noopener noreferrer">
                <Image className="fa fa-envelope"></Image>
              </LinkButton>
          </div>
          </SecondRow>
        </Main>
        <Lower>
          <p>Criado e desenvolvido por mim</p>
        </Lower>
      </Container>
    </StyledFooter>
  )
}
