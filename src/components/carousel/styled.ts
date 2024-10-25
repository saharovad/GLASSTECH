import styled, { keyframes } from "styled-components";
import { ArrowType } from "../arrows/types";

export const StyledCarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spaces.l} 0;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding: ${({ theme }) => theme.spaces.l} 0;
  }
`;

export const StyledCarouselContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledCarouselTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  text-decoration: underline;

  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;

export const StyledCarouselArrowsWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.xl};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    gap: ${({ theme }) => theme.spaces.xs};
    width: 100%;
  }
`;

const fadeInForward = keyframes`
0%{
  opacity: 0;
  transform: translateX(-30%);
}
100%{
  opacity: 1;
  transform: translateX(0);
}
`;
const fadeInBackward = keyframes`
0%{
  opacity: 0;
  transform: translateX(30%);
}
100%{
  opacity: 1;
  transform: translateX(0);
}
`;

export const StyledTextWrapper = styled.p<{ dir: ArrowType }>`
  font-size: ${({ theme }) => theme.fonts.sizes.textLarge};
  max-width: 68%;
  word-wrap: break-word;
  overflow-y: auto;
  animation: ${(props) => (props.dir === "next" ? fadeInForward : fadeInBackward)} 1s ease-in;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.textMobile};
  }
`;

export const StyledTextQuotesWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`;

export const StyledQuotes = styled.span<{ location: "bottom" | "top" }>`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  font-style: italic;
  font-weight: bold;
  ${({ location }) => (location === "bottom" ? "align-self: end" : "align-self:start")}
`;
