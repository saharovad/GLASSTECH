import { ReactNode } from "react";

export interface Props {
  icon: JSX.Element;
  title: string;
  content: string | ReactNode;
}
