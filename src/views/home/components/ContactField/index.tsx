import React from "react";
import styled from "styled-components";
import Title from "../../../../components/Title";
import emailjs from "emailjs-com";
import EmailJSResponseStatus from "../../../../interfaces/EmailJSResponseStatus";
import ChangeEvent from "../../../../interfaces/ChangeEvent";
import { useState } from "react";

const Section = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),url(/src/images/geometrical.jpg);
  background-size: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1344px;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FormContainer = styled.div`
  padding: 4rem;
  text-align: right;
  max-width: 1344px;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px;
  margin: 5rem auto 0 auto;

  @media (max-width: 768px) {
    padding: 3rem;
  }
`;

const Input = styled.input`
  padding: 2rem;
  width: 100%;
  border: 1px solid #ebebeb;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;

  &:focus {
    border-color: #4a56f9;
    outline: none;
    box-shadow: 0 0 5px #4a56f9;
  }
`

const TitleContact = styled.label`
  display: block;
  text-align: left;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  display: block;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  max-width: 80rem;
  margin: auto;
  line-height: 1.6;
`

const InputArea = styled.textarea`
  padding: 2rem;
  width: 100%;
  font-family: eurostyle, sans-serif;
  border: 1px solid #ebebeb;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;
  resize: none;

  &:focus {
    border-color: #4a56f9;
    outline: none;
    box-shadow: 0 0 5px #4a56f9;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
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
    width: 100%;
  }

  &:hover {
    transform: translateY(-6px);
  }
`;

const Container = styled.div`
  margin-bottom: 3rem;
`;

export default function ContactField() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ftneuia",
        "template_chmzdaq",
        formData,
        "dG55XyFDJioG8I8rQ"
      )
      .then(
        (response: EmailJSResponseStatus) => {
          setStatus("Mensagem enviada com sucesso!");
        },
        (err: EmailJSResponseStatus) => {
          setStatus("Ocorreu um erro ao enviar a mensagem.");
        }
      );
  };
  return (
    <Section id="contact">
    <TitleContainer>
      <Title size="2rem">CONTATO</Title>
    </TitleContainer>
    <Paragraph>Sinta-se livre para me enviar uma mensagem, eu irei entrar em contato assim que possível.</Paragraph>
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Container>
          <TitleContact>Nome</TitleContact>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Digite Seu Nome"
          />
        </Container>
        <Container>
          <TitleContact>Email</TitleContact>
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Digite Seu Email"
          />
        </Container>
        <Container>
          <TitleContact>Mensagem</TitleContact>
          <InputArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            cols={30}
            rows={10}
            placeholder="Escreva Sua Mensagem"
          />
        </Container>
        <Button type="submit">Enviar</Button>
      </form>
      {status && <p>{status}</p>}
    </FormContainer>
  </Section>
  );
}