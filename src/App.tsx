import styled, { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/header";
import WhyChooseUs from "./components/why-choose-us";
import WhatWeClean from "./components/gallery";
import Carousel from "./components/carousel";
import ContactUs from "./components/contact-us";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const StyledAppWrapper = styled.div`
  animation: ${fadeIn} 2s ease-out;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.xl2};
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Rubik", sans-serif;
    margin: 0;
    
  }
  h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
    font-weight: 400;
  }
  p, span {
    font-weight: 300;
  }
`;

const reviews = [
  "סהר פשוט תותח! הוא הגיע להחליף את הרשתות בבית והיה אדיב ומקצועי בצורה יוצאת דופן. עכשיו אין יתושים, והבית נראה נהדר!",
  "איזו חוויה מרגשת לקבל רשת שקופה חדשה לסלון! סהר התקין אותה בצורה מושלמת, וזה מוסיף אור ואווירה לבית.",
  "סהר התקין לנו מעבר נגיש לכלב על דלת הרשת, ועכשיו הכלב שלנו יוצא ונכנס בקלות. שירות אמין ומהיר.",
  "התריס החשמלי שלנו לא עבד חודשים, עד שסהר הגיע ותיקן אותו במהירות. שירות מקצועי ואמין!",
  "החלפתי את הרצועות לתריסים אצל סהר. הוא עשה את העבודה בדיוק ובמקצועיות, ועכשיו הכל פועל חלק.",
  "סהר הגיע להחליף גומיות למקלחון שלנו. העבודה הייתה מקצועית, מהירה, ואנחנו ממש מרוצים מהאטימות המושלמת!",
  "סהר הוא בחור אדיב ומקצועי. החליף לנו רשתות נגד יתושים, ועכשיו אנחנו יכולים לפתוח חלונות בלי לדאוג.",
  "הרשת השקופה שסהר התקין לנו פשוט מדהימה! מרגיש כאילו אין רשת בכלל, אבל היא עושה את העבודה.",
  "תודה לסהר על התקנת המעבר לכלב. פתרון נהדר, התקנה איכותית, ושירות מכל הלב.",
  "סהר הצליח לתקן תריס חשמלי שכבר חשבנו שנצטרך להחליף. חסך לנו כסף והרבה כאב ראש!",
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledAppWrapper dir="rtl">
        <Header />
        <WhyChooseUs />
        <WhatWeClean />
        <Carousel title={"לקוחות מספרים"} elements={reviews} />
        <ContactUs />
      </StyledAppWrapper>
    </ThemeProvider>
  );
};
export default App;
