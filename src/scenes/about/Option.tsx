import { type ReactNode } from "react";
import { type AboutItem } from "../../data/about";
import StyledOption from "./styled-components/StyledOption";

type OptionProps = {
  children: ReactNode;
  active: number;
  onClick: () => void;
  item: AboutItem;
};

function Option({ children, active, onClick, item }: OptionProps) {
  const activeClass = active === item.id;
  return (
    <StyledOption $activeClass={activeClass} onClick={onClick}>
      {children}
    </StyledOption>
  );
}

export default Option;
