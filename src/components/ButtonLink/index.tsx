import styled from "styled-components";
import ButtonLinkProps from "../../interfaces/ButtonLinkProps";

const Button = styled.a`
  color: #9ca3af;
  position: relative;
  font-size: 1.8rem;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -7px;
    left: 0;
    background: linear-gradient(270deg, #ff6d6d 0%, #1d1616 100%);
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export default function ButtonLink({ description, href = '#' }: ButtonLinkProps) {
  return <Button href={href}>{description}</Button>
}