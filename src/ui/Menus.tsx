import { ReactNode, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { HiDownload } from "react-icons/hi";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonIcon = styled.button<{ $openId: string }>`
  position: relative;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius-md);
  transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;

  ${(props) =>
    props.$openId === ""
      ? "background-color: var(--color-grey-0);"
      : "background-color: var(--color-brand-100);"}

  @media (max-width: 768px) {
    padding: 1.1rem;
    border-radius: var(--border-radius-sm);
  }

  &:hover {
    background-color: var(--color-brand-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-700);
  }
`;

const StyledList = styled.ul<{ $position: Position | null }>`
  position: absolute;
  z-index: 999;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  overflow: hidden;

  right: ${(props) => props.$position!.x}px;
  top: ${(props) => props.$position!.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
  &:hover {
    /* background-color: var(--color-grey-50); */
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

type Position = {
  x: number;
  y: number;
};

type MenusContextProps = {
  $openId: string;
  close: () => void;
  open: (id: string) => void;
  position: { x: number; y: number } | null;
  setPosition: (position: Position) => void;
};
type MenusProps = {
  children: ReactNode;
};

type ToggleProps = {
  id: string;
};

type ButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
};

const MenusContext = createContext<MenusContextProps | null>(null);

function Menus({ children }: MenusProps) {
  const [$openId, setOpenId] = useState("");
  const [position, setPosition] = useState<Position | null>(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{
        $openId,
        close,
        open,
        position,
        setPosition,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }: ToggleProps) {
  const { open, $openId, close, setPosition } = useContext(MenusContext)!;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    const isMobile = window.innerWidth < 768;

    const rect = (e.target as HTMLElement)
      .closest("button")!
      .getBoundingClientRect();

    setPosition({
      x: !isMobile
        ? window.innerWidth - rect.width - 4 * rect.x
        : window.innerWidth - rect.width - 4 * rect.x - 115,
      y: rect.y + rect.height,
    });

    $openId === "" || $openId !== id ? open(id) : close();
  }
  return (
    <ButtonIcon $openId={$openId} onClick={handleClick}>
      {<HiDownload />}
    </ButtonIcon>
  );
}
type ListProps = {
  id: string;
  children: ReactNode;
};

function List({ id, children }: ListProps) {
  const { $openId, position, close } = useContext(MenusContext)!;
  const ref = useOutsideClick(close, false);

  if ($openId !== id) return null;

  return createPortal(
    <StyledList onClick={close} ref={ref} $position={position}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }: ButtonProps) {
  const { close } = useContext(MenusContext)!;

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <StyledButton onClick={handleClick}>
      {icon}
      <span>{children}</span>
    </StyledButton>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
