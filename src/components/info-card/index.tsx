import { StyledInfoCardContent, StyledInfoCardIcon, StyledInfoCardTitle, StyledInfoCardWrapper } from "./styled";
import { Props } from "./types";

const InfoCard = ({ content, icon, title }: Props) => {
  return (
    <StyledInfoCardWrapper>
      {icon}
      <StyledInfoCardTitle>{title}</StyledInfoCardTitle>
      <StyledInfoCardContent>{content}</StyledInfoCardContent>
    </StyledInfoCardWrapper>
  );
};
export default InfoCard;
