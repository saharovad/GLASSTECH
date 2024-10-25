import { RefObject } from "react";

export type ArrowType = "next" | "previous";

export interface Props {
  type: ArrowType;
  disabled: boolean;
  onClick: (slide: ArrowType) => void;
}
