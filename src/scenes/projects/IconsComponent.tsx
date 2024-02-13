import styled from "styled-components";
import ButtonIconComponent from "../../ui/ButtonIcon";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";

type IconsComponentProps = {
  linkForLivePreview: string;
  linkForCodePreview: string;
};

const StyledIconsComponent = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 544px) {
    gap: 0;
  }
`;
function IconsComponent({
  linkForLivePreview,
  linkForCodePreview,
}: IconsComponentProps) {
  return (
    <StyledIconsComponent>
      <li>
        <ButtonIconComponent href={linkForLivePreview} $projectStyle={true}>
          <MdRemoveRedEye />
        </ButtonIconComponent>
      </li>
      <li>
        <ButtonIconComponent href={linkForCodePreview} $projectStyle={true}>
          <FaCode />
        </ButtonIconComponent>
      </li>
    </StyledIconsComponent>
  );
}

export default IconsComponent;
