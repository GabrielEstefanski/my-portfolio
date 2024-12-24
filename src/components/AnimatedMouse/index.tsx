import styled, { keyframes } from "styled-components";
import DotProps from "../../interfaces/DotProps";

const scrollAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(10px);
    opacity: 0;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
  `;

const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  background-color: #141C3A;
  border-radius: 50%;
  animation: ${scrollAnimation} 1.5s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay};
`;

export default function DotsIndicator() {
  return (
    <DotsWrapper>
      <Dot delay="0s" />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
    </DotsWrapper>
  );
}
