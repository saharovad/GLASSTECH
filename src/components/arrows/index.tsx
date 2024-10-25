import styled from "styled-components";
import { IconArrowLeft, IconArrowRight } from "../../icons";
import { StyledArrowButton } from "./styled";
import { Props } from "./types";

const StyledArrowRight = styled(IconArrowRight)`
  width: 48px;
  height: 48px;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    width: 20px;
    height: 20px;
  }
`;
const StyledArrowLeft = styled(IconArrowLeft)`
  width: 48px;
  height: 48px;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    width: 20px;
    height: 20px;
  }
`;

export const ArrowButton = ({ type, disabled, onClick }: Props) => {
  return (
    <StyledArrowButton disabled={disabled} onClick={() => onClick(type)}>
      {type === "next" ? <StyledArrowRight /> : <StyledArrowLeft />}
    </StyledArrowButton>
  );
};
export default ArrowButton;
