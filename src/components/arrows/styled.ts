import styled, { keyframes } from "styled-components";
import { ArrowType } from "./types";

const clickButton = keyframes`
  0%{
    transform: scale(0.8);

  }
  50%{
    transform: scale(1.2);

  }
  100% {
    transform: scale(1);

  }
`;

export const StyledArrowButton = styled.button`
  cursor: pointer;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  :active {
    animation: ${clickButton} 2s ease-out;
  }
`;
