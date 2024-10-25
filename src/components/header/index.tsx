import {
  StyledHeaderContentWrapper,
  StyledHeaderImg,
  StyledHeaderSubtitle,
  StyledHeaderTitle,
  StyledHeaderWrapper,
  StyledHeaderLogo,
} from "./styled";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContentWrapper>
        <StyledHeaderLogo src="./images/logo.svg" />
        <StyledHeaderTitle> עבודות זכוכית ואלומיניום </StyledHeaderTitle>
        <StyledHeaderSubtitle>
          ברוכים הבאים ל-GLASSTECH, אצלנו תמצאו את כל הפתרונות בעבודות זכוכית, אלומיניום ורשתות
          <br />
          מותאמים בדיוק למה שאתם צריכים, עם דגש על שירות מקצועי ואמין .
        </StyledHeaderSubtitle>
        <StyledHeaderImg />
      </StyledHeaderContentWrapper>
    </StyledHeaderWrapper>
  );
};
export default Header;
