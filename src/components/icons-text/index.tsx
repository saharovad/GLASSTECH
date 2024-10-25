import { StyledIcon, StyledIconTextWrapper, StyledText } from "./styled";
import { Props } from "./types";

const IconText = ({ icon, title }: Props) => {
  return (
    <StyledIconTextWrapper>
      {icon}
      <StyledText>{title}</StyledText>
    </StyledIconTextWrapper>
  );
};
export default IconText;
