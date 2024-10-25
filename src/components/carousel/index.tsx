import { useEffect, useMemo, useRef, useState } from "react";
import { useIntersectionObserver } from "../../hooks/use-intersection-observer";
import { ArrowType } from "../arrows/types";
import { Props } from "./types";
import ArrowButton from "../arrows";
import {
  StyledCarouselArrowsWrapper,
  StyledCarouselContentWrapper,
  StyledCarouselTitle,
  StyledCarouselWrapper,
  StyledTextQuotesWrapper,
  StyledTextWrapper,
} from "./styled";

const Carousel = ({ elements, title }: Props) => {
  const { ref, visible } = useIntersectionObserver<HTMLDivElement>();
  const [dir, setDir] = useState<ArrowType>("next");

  const interval = useRef<undefined | NodeJS.Timer>(undefined);

  const [currentElementIndex, setCurrentElementIndex] = useState<number>(0);

  const onSlide = (type: ArrowType) => {
    if (type === "next" && !elements[currentElementIndex + 1]) return;
    if (type === "previous" && !elements[currentElementIndex - 1]) return;
    type === "next" ? setCurrentElementIndex((state) => state + 1) : setCurrentElementIndex((state) => state - 1);
    restartInterval();
  };

  const restartInterval = () => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      onSlide(dir);
    }, 7000);
  };

  useEffect(() => {
    if (visible) restartInterval();
  }, [dir, visible]);

  useEffect(() => {
    if (currentElementIndex === 0) setDir("next");
    if (currentElementIndex === elements.length - 1) setDir("previous");
  }, [currentElementIndex]);

  const animationDir = useMemo<ArrowType>(() => {
    if (currentElementIndex === elements.length - 1 && dir === "previous") {
      return "next";
    } else if (currentElementIndex === 0 && dir === "next") {
      return "previous";
    } else return dir;
  }, [dir, currentElementIndex]);

  console.log("animationDir ", animationDir);

  return (
    <StyledCarouselWrapper ref={ref}>
      <StyledCarouselContentWrapper>
        <StyledCarouselTitle>{title}</StyledCarouselTitle>
        <StyledCarouselArrowsWrapper>
          <ArrowButton disabled={Boolean(!elements[currentElementIndex + 1])} onClick={onSlide} type="next" />
          <StyledTextQuotesWrapper>
            <StyledTextWrapper dir={animationDir} key={currentElementIndex}>
              <strong>{`"`}</strong>
              {elements[currentElementIndex]}
              <strong>{`"`}</strong>
            </StyledTextWrapper>
          </StyledTextQuotesWrapper>
          <ArrowButton disabled={Boolean(!elements[currentElementIndex - 1])} onClick={onSlide} type="previous" />
        </StyledCarouselArrowsWrapper>
      </StyledCarouselContentWrapper>
    </StyledCarouselWrapper>
  );
};
export default Carousel;
