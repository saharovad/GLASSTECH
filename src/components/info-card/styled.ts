import styled from "styled-components";

export const StyledInfoCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.colors.backgrounds.aquaDark};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.l};
  padding: ${({ theme }) => theme.spaces.xl};
  align-items: center;
  border-radius: 12px;
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.4);
`;

export const StyledInfoCardIcon = styled.img`
  object-fit: contain;
`;
export const StyledInfoCardTitle = styled.h4`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.subtitleMobile};
  }
`;
export const StyledInfoCardContent = styled.p`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fonts.sizes.textLarge};
  font-weight: 500;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.textMobile};
  }
`;
