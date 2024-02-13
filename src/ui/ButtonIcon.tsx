import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import styled from "styled-components";

type ButtonForProjectsProps = {
  $projectStyle?: boolean;
};

const ButtonIcon = styled.button<ButtonForProjectsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  ${(props) =>
    props.$projectStyle ? "padding: 0.5rem;" : " padding: 1.2rem 2.4rem;"}

  border-radius: var(--border-radius-md);
  transition: all 0.2s;

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
    ${(props) =>
      props.$projectStyle
        ? "color: var(--color-brand-500);"
        : "color: var(--color-brand-600);"}
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  $projectStyle?: boolean;
};

type ButtonIconProps = { href?: string } & (ButtonProps | AnchorProps);

const ButtonIconComponent = (props: ButtonIconProps) => {
  if ("href" in props) {
    const { href, children, ...rest } = props as AnchorProps;
    return (
      <ButtonIcon
        as="a"
        $projectStyle={rest.$projectStyle || false}
        href={href}
        target="_blank"
        {...rest}
      >
        {children}
      </ButtonIcon>
    );
  } else {
    const { children, ...rest } = props as ButtonProps;
    return <ButtonIcon {...rest}>{children}</ButtonIcon>;
  }
};

export default ButtonIconComponent;
