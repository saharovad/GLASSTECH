import { useWindowDimensions } from "../../hooks/use-window-inner-width";
import { theme } from "../../theme";
import IconText from "../icons-text";
import {
  StyledGalleryLeft,
  StyledGalleryRegular,
  StyledGalleryRight,
  StyledGalleryRightTop,
  StyledGalleryWrapper,
  StyledMobileGalleryWrapper,
  StyledWhatWeCleanContentWrapper,
  StyledWhatWeCleanTitle,
  StyledWhatWeCleanWrapper,
} from "./styled";

const WhatWeClean = () => {
  const { width } = useWindowDimensions();

  if (width <= theme.breakPoints.smallNumber) {
    return (
      <StyledWhatWeCleanWrapper>
        <StyledWhatWeCleanContentWrapper>
          <StyledWhatWeCleanTitle>תמונות מהשטח</StyledWhatWeCleanTitle>
          <StyledMobileGalleryWrapper>
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-1.jpeg"} />} title="רשת שקופה בלתי נראת לעין - להיט!" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-4.jpeg"} />} title="החלפת מנועים של תריסים חשמליים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-5.jpeg"} />} title="החלפת גומיות למקלחונים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-9.jpeg"} />} title="החלפת צירים למקלחונים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-6.jpeg"} />} title="דלת רשת" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-2.jpeg"} />} title="מעבר נגיש לבעלי חיים" />
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-7.jpeg"} />} title="החלפת גומיות למקלחונים" />
          </StyledMobileGalleryWrapper>
        </StyledWhatWeCleanContentWrapper>
      </StyledWhatWeCleanWrapper>
    );
  }

  return (
    <StyledWhatWeCleanWrapper>
      <StyledWhatWeCleanContentWrapper>
        <StyledWhatWeCleanTitle>תמונות מהשטח</StyledWhatWeCleanTitle>
        <StyledGalleryWrapper>
          <StyledGalleryRight>
            <StyledGalleryRightTop>
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-1.jpeg"} />} title="רשת שקופה בלתי נראת לעין - להיט!" />
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-4.jpeg"} />} title="החלפת מנועים של תריסים חשמליים" />
            </StyledGalleryRightTop>

            <StyledGalleryRightTop>
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-5.jpeg"} />} title="החלפת גומיות למקלחונים" />
              <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-9.jpeg"} />} title="החלפת צירים למקלחונים" />
            </StyledGalleryRightTop>
          </StyledGalleryRight>
          <StyledGalleryLeft>
            <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-6.jpeg"} />} title="התקנת מקלחונים" />
          </StyledGalleryLeft>
          <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-2.jpeg"} />} title="מעבר נגיש לבעלי חיים" />
          <IconText icon={<StyledGalleryRegular backgroundImagePath={"./images/gallery-7.jpeg"} />} title="החלפת גומיות למקלחונים" />
        </StyledGalleryWrapper>
      </StyledWhatWeCleanContentWrapper>
    </StyledWhatWeCleanWrapper>
  );
};
export default WhatWeClean;
