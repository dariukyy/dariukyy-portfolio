import styled from "styled-components";

const MenusIconAndText = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2.8rem;

  &:hover {
    background-color: var(--color-brand-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-700);
  }
`;
export default MenusIconAndText;
