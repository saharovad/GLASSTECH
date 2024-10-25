import styled from "styled-components";

export const StyledContactUsFixed = styled.div`
  position: fixed;
  top: 2%;
  left: 2%;
  width: auto;
  height: auto;
  gap: ${({ theme }) => theme.spaces.xl};
  padding: ${({ theme }) => theme.spaces.l};
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const StyledContactUsFixedA = styled.a`
  all: unset;
  cursor: pointer;
`;

export const StyledContactUsWrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spaces.xl} 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaDark};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding: ${({ theme }) => theme.spaces.l} 0;
  }
`;

export const StyledContactUsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  width: 80%;
  align-items: center;
`;

export const StyleContactUsTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;

export const StyledContactUsPersonalPhone = styled.a`
  all: unset;
  font-weight: 300;
  display: flex;
  gap: ${({ theme }) => theme.spaces.s};
  align-items: center;
  cursor: pointer;
`;

export const StyledContactUsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: ${({ theme }) => theme.spaces.m};
  }
`;

export const StyledContactUsText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: 400;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.textMobile};
  }
`;
