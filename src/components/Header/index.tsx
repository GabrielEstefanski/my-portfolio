import styled from "styled-components";
import { useState } from "react";
import Icon from "../../images/programming.png";
import HamburgerMobile from "../Icons/HamburgerMobile";
import NavProps from "../../interfaces/NavProps";

const Container = styled.header<NavProps>`
  background: #f5f5f5;
  height: 90px;
  padding: 0 5%;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, .08);
`;

const Row = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav<NavProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: calc(100% - 90px);
  background: #fff;
  flex-direction: column;
  justify-content: flex-start;
  color: #333;
  align-items: center;
  z-index: 1001;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (min-width: 769px) {
    display: flex;
    position: static;
    background: none;
    width: auto;
    height: auto;
    flex-direction: row;
    justify-content: flex-end;

    ul {
      flex-direction: row;
    }
  }
`;

const LinkButton = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  color: #141C3A;
  transition: color 0.2s ease;

  &:hover {
    color: #4a56f9;
  }

  @media (min-width: 769px) {
    font-size: 1.125rem;
  }
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;

  @media (min-width: 830px) {
    height: 70px;
    width: 70px;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Container id="header" open={menuOpen}>
    <Row>
      <Logo src={Icon} alt="Logo" />
      <HamburgerMobile open={menuOpen} onClick={toggleMenu} />
      <Nav open={menuOpen}>
        <ul>
          <li>
            <LinkButton href="#home" onClick={closeMenu}>
              Página inicial
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#about-me" onClick={closeMenu}>
              Sobre mim
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#projects" onClick={closeMenu}>
              Projetos
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#experiences" onClick={closeMenu}>
              Experiências
            </LinkButton>
          </li>
          <li>
            <LinkButton href="#contact" onClick={closeMenu}>
              Contato
            </LinkButton>
          </li>
        </ul>
      </Nav>
    </Row>
  </Container>
  );
}
