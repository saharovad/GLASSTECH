import styled from "styled-components";

export const StyledWhyChooseUsWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.l} 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding: ${({ theme }) => theme.spaces.l} 0;
  }
`;
export const StyledWhyChooseUsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl} 0;
  align-items: center;
  width: 80%;
`;

export const StyledWhyChooseUsTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  text-decoration: underline;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;
export const StyledWhyChooseUsText = styled.h3`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.black};
  font-size: ${({ theme }) => theme.fonts.sizes.text};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.textMobile};
  }
`;

export const StyledInfoCardsWrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spaces.xl};
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  grid-template-rows: auto;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const StyledContentWrapper = styled.div`
  text-align: right;
  width: 100%;
  height: 100%;
`;

export const StyledContentCard = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.sizes.textLarge};
  font-weight: 400;
`;
