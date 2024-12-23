import React from "react";
import styled from "styled-components";
import HamburgerProps from "../../../interfaces/HamburgerProps";

const MobileMenu = styled.div`
  display: none;
  width: 32px;
  background-color: transparent;
  margin: 8px;
  transition: .4s;

  .line1, .line2, .line3 {
    width: 100%;
    height: 2px;
    background-color: #000;
    margin: 6px 0;
    transition: 0.4s;
  }

  &.active .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
  }

  &.active .line2 {
    opacity: 0;
  }

  &.active .line3 {
    transform: rotate(45deg) translate(-3px, -4px);
  }

  @media screen and (max-width: 769px) {
    display: block;
  }
`;

export default function HamburgerMobile({ open, onClick }: HamburgerProps) {
  return (
    <MobileMenu
      className={open ? "active" : ""}
      onClick={onClick}
    >
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </MobileMenu>
  );
}
