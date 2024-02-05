import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  @media (max-width: 768px) {
    padding: 1.4rem;
    border-radius: 0%;
  }

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

type ButtonIconProps = { href?: string } & (ButtonProps | AnchorProps);

const ButtonIconComponent = (props: ButtonIconProps) => {
  if ("href" in props) {
    const { href, children, ...rest } = props as AnchorProps;
    return (
      <ButtonIcon as="a" href={href} target="_blank" {...rest}>
        {children}
      </ButtonIcon>
    );
  } else {
    const { children, ...rest } = props as ButtonProps;
    return <ButtonIcon {...rest}>{children}</ButtonIcon>;
  }
};

export default ButtonIconComponent;
