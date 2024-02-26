import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

type Size = "small" | "medium" | "large";
type Variation = "primary";

type ButtonProps = {
  size?: Size;
  $variation?: Variation;
  to?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,

  large: css`
    font-size: 1.5rem;
    padding: 1.3rem 2.5rem;
    font-weight: 500;
    border-radius: 60px;
    width: 17rem;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    box-shadow: var(--shadow-md);
    transition: all 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
      box-shadow: var(--shadow-lg);
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(2px);
      box-shadow: var(--shadow-md);
    }
  `,
};

const ButtonEl = styled.button<ButtonProps>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: 3px solid var(--color-brand-500);
    outline-offset: 2px;
  }

  ${(props) => sizes[props.size || "medium"]}
  ${(props) => variations[props.$variation || "primary"]}
`;

const Button = ({ to, children, ...props }: ButtonProps) => {
  if (to) {
    return (
      <ButtonEl as={Link} to={to} {...props}>
        {children}
      </ButtonEl>
    );
  }

  return <ButtonEl {...props}>{children}</ButtonEl>;
};

ButtonEl.defaultProps = {
  $variation: "primary",
  size: "medium",
};

export default Button;
