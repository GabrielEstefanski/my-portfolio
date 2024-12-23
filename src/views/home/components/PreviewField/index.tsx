import React from "react";
import styled from "styled-components";
import Geometrical from '../../../../images/geometrical.jpg';
import SitesField from "../../../../components/Icons/SitesField";
import AnimatedMouse from "../../../../components/AnimatedMouse";

const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1rem;
  height: 100vh;
  background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${Geometrical});
  background-size: cover;
  border-bottom: #dddddd solid 1px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin-top: -10rem;

  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NameTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-weight: 800;
  font-size: 3rem;

  @media only screen and (max-width: 37.5em) {
    font-size: 2rem;
  }
`;

const DescriptionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 60rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.15rem;
    max-width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top: 3rem;
`;

const Button = styled.a`
  padding: 1rem 6rem;
  font-size: 1.5rem;
  background: #4a56f9;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform .3s;

  @media only screen and (max-width: 768px) {
    padding: 1rem 3rem;
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-6px);
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PreviewField () {
  return (
    <>
      <Section id="home">
        <Container>
            <NameTitle>DESENVOLVEDOR FULLSTACK</NameTitle>
            <DescriptionTitle>
              Apaixonado por tecnologia e desenvolvimento, busco sempre criar soluções inovadoras e eficientes,
              explorando novas possibilidades para transformar ideias em realidade.
            </DescriptionTitle>
            <SitesField/>
            <ButtonContainer>
              <Button href="#contact">Contato</Button>
            </ButtonContainer>
        </Container>
        <DotsContainer>
          <AnimatedMouse/>
        </DotsContainer>
      </Section>
    </>
  )
}

