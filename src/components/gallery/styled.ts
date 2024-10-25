import styled from "styled-components";

interface StyledProps {
  backgroundImagePath: string;
}

export const StyledWhatWeCleanWrapper = styled.div`
  padding: ${({ theme }) => theme.spaces.l} 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    padding: 0;
  }
`;
export const StyledWhatWeCleanContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledWhatWeCleanTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  text-decoration: underline;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    font-size: ${({ theme }) => theme.fonts.sizes.titleMobile};
  }
`;

export const StyledGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 4fr 3fr;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.l} 0;
  display: grid;
  gap: ${({ theme }) => theme.spaces.xl};
  height: 1500px;
`;

export const StyledGalleryRight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.xl};
`;
export const StyledGalleryLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const StyledGalleryRightTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledGalleryRightMiddle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledGalleryMiddle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.xl};
`;

export const StyledGalleryRegular = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ backgroundImagePath }) => backgroundImagePath});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease-in-out;
  @media screen and (${({ theme }) => theme.breakPoints.small}) {
    height: 400px;
  }
`;

export const StyledMobileGalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  padding: ${({ theme }) => theme.spaces.l} 0;
  width: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spaces.xl};
`;
