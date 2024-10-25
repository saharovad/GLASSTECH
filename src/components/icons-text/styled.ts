import styled from "styled-components";

export const StyledIconTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spaces.m};
  justify-content: center;
  align-items: center;
`;

export const StyledIcon = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export const StyledText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: bolder;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.subtitleMobile};
  }
`;
