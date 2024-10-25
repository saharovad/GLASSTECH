import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spaces.l};
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding-bottom: ${({ theme }) => theme.spaces.l};
  }
`;

export const StyledHeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl};
  align-items: center;
  width: 80%;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    width: 90%;
  }
`;

export const StyledHeaderTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.white};
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  font-weight: bold;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;
export const StyledHeaderSubtitle = styled.h3`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.texts.white};
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: 400;

  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.subtitleMobile};
  }
`;

export const StyledHeaderImg = styled.img`
  background-image: url("./images/main.jpg");
  filter: brightness(50%);
  background-size: cover;
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;
export const StyledHeaderLogo = styled.img`
  margin-top: ${({ theme }) => theme.spaces.xl};
`;
