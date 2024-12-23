import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #4a56f9;
  color: white;
  @media screen and (min-width: 769px) {
    padding: 4rem 1.5rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem 3rem;
  }
`

export default function Footer() {
  return (
    <Container>
      2024 - Feito por mim
    </Container>
  )
}
