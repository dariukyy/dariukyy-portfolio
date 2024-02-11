import styled from "styled-components";
import { device } from "../../utils/breakpoints";
import { motion } from "framer-motion";
import ButtonIconComponent from "../../ui/ButtonIcon";
import { MdRemoveRedEye } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

const ProjectBoxImg = styled.img`
  position: absolute;
  right: -7rem;
  bottom: -1.5rem;
  width: 35rem;
  height: 30rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.2s ease-in-out;
  border-top-left-radius: var(--border-radius-lg);
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.4)) brightness(88%);

  &:hover {
    transform: scale(1.04) translateX(-0.75rem) translateY(0.75rem)
      rotate(-2deg);
  }

  @media (max-width: 883px) {
    width: 32rem;
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
  padding: 1.5rem 2.3rem 2.3rem 2.3rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  /* transition: background-color border box-shadow 0.3s; */

  @media (max-width: 883px) {
    padding: 1rem 1.8rem 1.8rem 1.8rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 883px) {
    width: 100%;
  }
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
  gap: 1rem;
`;

const Desription = styled.p`
  font-size: 1.3rem;
  height: 100%;
  width: 43%;
  font-weight: 400;
  letter-spacing: 0.7px;
  color: var(--color-grey-500);

  @media (max-width: 883px) {
    width: 40%;
  }

  @media ${device.smTablet} {
    width: 100%;
  }
`;

const IconsComponent = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: space-between;
  align-items: center;
`;

const ResponsiveComponent = styled.li<{ isResponsive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  ${(props) =>
    props.isResponsive
      ? `color: var(--color-green-100);`
      : `color: var(--color-red-800);`}

  & svg {
    width: 1.1rem;
    height: 1.1rem;
    ${(props) =>
      props.isResponsive
        ? `color: var(--color-green-100);`
        : `color: var(--color-red-800);`}
  }
`;

const ProjectBoxTags = styled.ul`
  width: 50%;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.7px;
  font-size: 1.1rem;
  font-weight: 400;

  @media (max-width: 883px) {
    width: 45%;
  }
`;

const ProjectTagItem = styled.li`
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-brand-200);
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-200);
  transition: all 0.2s ease-in-out;
  box-shadow: var(--shadow-sm);

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
  responsive: { isResponsive: boolean; responsiveText: string };
};

function Project({
  title,
  description,
  tags,
  image,
  livePreview,
  codePreview,
  alt,
  responsive,
}: ProjectProps) {
  return (
    <ProjectBox>
      <ProjectBoxImg src={image} alt={alt} />
      <ProjectBoxContent>
        <Title>
          {title}
          <IconsComponent>
            <ResponsiveComponent isResponsive={responsive.isResponsive}>
              <FaRegCircleCheck />
              <span>{responsive.responsiveText}</span>
            </ResponsiveComponent>

            <li>
              <ButtonIconComponent href={livePreview} projectStyle={true}>
                <MdRemoveRedEye />
              </ButtonIconComponent>
            </li>
            <li>
              <ButtonIconComponent href={codePreview} projectStyle={true}>
                <FaCode />
              </ButtonIconComponent>
            </li>
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
