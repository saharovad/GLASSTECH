import { IconClean, IconClock, IconFast, IconHandShake, IconMosquito, IconOk, IconSaveMoney, IconTools } from "../../icons";
import InfoCard from "../info-card";
import {
  StyledContentCard,
  StyledContentWrapper,
  StyledInfoCardsWrapper,
  StyledWhyChooseUsContentWrapper,
  StyledWhyChooseUsText,
  StyledWhyChooseUsTitle,
  StyledWhyChooseUsWrapper,
} from "./styled";

const WhyChooseUs = () => {
  return (
    <StyledWhyChooseUsWrapper>
      <StyledWhyChooseUsContentWrapper>
        <StyledWhyChooseUsTitle>מה אנחנו עושים?</StyledWhyChooseUsTitle>

        <StyledInfoCardsWrapper>
          <InfoCard
            icon={<IconMosquito size={48} />}
            title="החלפה ותיקון רשתות נגד יתושים"
            content={
              <StyledContentWrapper>
                <StyledContentCard>רשת בלויה ודהויה? </StyledContentCard>
                <br />
                <StyledContentCard>רשת קרועה ולא מתוחה?</StyledContentCard>
                <br />
                <StyledContentCard>אין רשת בכלל?</StyledContentCard>
                <br />
                <StyledContentCard>שירות ותיקון בבית הלקוח!</StyledContentCard>
              </StyledContentWrapper>
            }
          />
          <InfoCard
            icon={<IconHandShake size={48} />}
            title="תיקוני תריסים"
            content={
              <StyledContentWrapper>
                <StyledContentCard> תיקוני תריסים חשמליים</StyledContentCard>
                <br />
                <StyledContentCard> תיקוני תריסי גלילה</StyledContentCard>
                <br />
                <StyledContentCard> שירות ותיקון בבית הלקוח!</StyledContentCard>
                <br />
              </StyledContentWrapper>
            }
          />
          <InfoCard
            icon={<IconTools size={48} />}
            title="החלפת גומיות למקלחונים"
            content={
              <StyledContentWrapper>
                <StyledContentCard>אין לכם מקלחון בבית?</StyledContentCard>
                <br />
                <StyledContentCard>הגומי במקלחון בלוי?</StyledContentCard>
                <br />
                <StyledContentCard> המים יוצאים החוצה?</StyledContentCard>
                <br />
                <StyledContentCard> שירות ותיקון בבית הלקוח!</StyledContentCard>
              </StyledContentWrapper>
            }
          />
        </StyledInfoCardsWrapper>
      </StyledWhyChooseUsContentWrapper>
    </StyledWhyChooseUsWrapper>
  );
};

export default WhyChooseUs;
