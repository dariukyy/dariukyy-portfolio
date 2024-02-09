import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { motion } from "framer-motion";
import ButtonIconComponent from "../../ui/ButtonIcon";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const ProjectBoxImg = styled.img`
  position: absolute;
  right: -7rem;
  bottom: 0;
  width: 35rem;
  height: 30rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.2s ease-in-out;

  border-top-left-radius: var(--border-radius-lg);
  border: 1px solid var(--color-grey-200);
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.4));
  grid-row: 1 / -1;
  grid-column: 2 / 3;

  @media ${device.mobile} {
    width: auto;
    height: auto;
  }

  &:hover {
    transform: scale(1.04) translateX(-0.75rem) translateY(0.75rem)
      rotate(-2deg);
  }
`;

const ProjectBox = styled(motion.div)`
  position: relative;
  min-height: 35rem;
  max-width: 60rem;
  width: 100%;
  background-color: var(--color-grey-100);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-radius: var(--border-radius-lg);
  /* padding: 1.5rem 1rem; */
  padding: 2.3rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transition: background-color border box-shadow 0.3s;

  @media ${device.mobile} {
    height: auto;
  }

  @media ${device.tablet} {
    height: 20rem;
  }

  /* ${ProjectBoxImg} {
    transition: transform 0.2s ease-in-out;
  }

  &:hover ${ProjectBoxImg} {
    transform: scale(1.04) translateX(-0.75rem) translateY(0.75rem)
      rotate(-2deg);
  } */
`;

const ProjectBoxContent = styled.div`
  width: 43%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1.1px;
  width: 100%;
  color: var(--color-grey-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Desription = styled.p`
  font-size: 1.4rem;
  height: 100%;
  width: 100%;
  font-weight: 400;
  letter-spacing: 0.7px;
  color: var(--color-grey-500);
`;

const IconsComponent = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  /* width: 3rem;
  height: 3rem; */
  /* color: var(--color-brand-800); */
`;

const ProjectBoxTags = styled.div`
  width: 50%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.7px;
  font-size: 1.2rem;
  font-weight: 400;
`;

const ProjectTagItem = styled.p`
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-brand-200);
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-200);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.3rem) scale(1.04);
  }
`;

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  livePreview: string;
  codePreview: string;
  alt: string;
};

function Project({
  title,
  description,
  tags,
  image,
  livePreview,
  codePreview,
  alt,
}: ProjectProps) {
  return (
    <ProjectBox>
      <ProjectBoxImg src={image} alt={alt} />
      <ProjectBoxContent>
        <Title>
          {title}
          <IconsComponent>
            <ButtonIconComponent href={livePreview} projectStyle={true}>
              <MdRemoveRedEye />
            </ButtonIconComponent>
            <ButtonIconComponent href={codePreview} projectStyle={true}>
              <FaCode />
            </ButtonIconComponent>
          </IconsComponent>
        </Title>
        <Desription>{description}</Desription>
      </ProjectBoxContent>
      <ProjectBoxTags>
        {tags.map((tag, index) => (
          <ProjectTagItem key={index}>{tag}</ProjectTagItem>
        ))}
      </ProjectBoxTags>
    </ProjectBox>
  );
}

export default Project;
