import styled from "styled-components";
import { motion } from "framer-motion";

import { FaRegCircleCheck } from "react-icons/fa6";
import IconsComponent from "./IconsComponent";

const ProjectBox = styled(motion.li)`
  position: relative;
  width: 100%;
  min-height: 35rem;
  max-width: 60rem;
  height: auto;
  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  border-radius: var(--border-radius-lg);
  padding: 1.5rem 2.3rem 2.3rem 2.3rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: var(--shadow-md);
  overflow: hidden;

  @media (max-width: 883px) {
    padding: 1rem 1.8rem 1.8rem 1.8rem;
  }

  @media (max-width: 544px) {
    gap: 1rem;
    justify-content: flex-start;
    min-height: 53rem;
  }
`;
const ProjectImage = styled.img`
  position: absolute;
  right: -7.5rem;
  bottom: -1.5rem;
  width: 35rem;
  height: 30rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.2s ease-in-out;
  border-top-left-radius: var(--border-radius-lg);
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.4)) brightness(90%);

  &:hover {
    transform: scale(1.04) translateX(-0.75rem) translateY(0.75rem)
      rotate(-2deg);
  }

  @media (max-width: 883px) {
    width: 32rem;
  }

  @media (max-width: 544px) {
    left: 50%;
    bottom: 14.5%;
    transform: translate(-50%, 21.5%);
    object-fit: cover;
    object-position: top left;
    width: 93%;
    height: 26rem;
    border-radius: var(--border-radius-lg);
    box-shadow: 0rem 0rem 1.2rem rgba(0, 0, 0, 0.22);
    filter: brightness(90%);
    border: 2px solid var(--color-grey-200);

    &:hover {
      transform: translate(-50%, 21.5%) scale(1.03);
    }
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 544px) {
    gap: 1rem;
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

  @media (max-width: 544px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 0.7rem;
  }
`;

const Desription = styled.p`
  font-size: 1.3rem;
  height: 100%;
  width: 43%;
  font-weight: 400;
  letter-spacing: 0.7px;
  color: var(--color-grey-500);

  @media (max-width: 883px) {
    width: 46%;
  }
  @media (max-width: 544px) {
    width: 100%;
  }
`;

const ProjectInfoBox = styled.div`
  display: flex;

  @media (max-width: 544px) {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: -0.8rem;
  }
`;

const ResponsiveComponent = styled.li<{ isResponsive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
  font-size: 0.9rem;
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
  @media (max-width: 544px) {
    margin: 0;
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
    width: 46%;
  }

  @media (max-width: 544px) {
    width: 100%;
    margin: 1.2rem 0;
  }
`;

const ProjectTagItem = styled(motion.li)`
  padding: 0.4rem 1rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-brand-500);
  color: var(--color-grey-900);
  border: 2px solid var(--color-grey-200);
  transition: all 0.2s;
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
  id: number;
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
  id,
}: ProjectProps) {
  const VariantsForCard = {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: (id: number) => ({
      opacity: 1,
      x: 0,
      // threshold: 0.5,
      transition: {
        delay: 0.1 * id,
      },
    }),
  };

  return (
    <ProjectBox
      viewport={{ once: true }}
      initial={VariantsForCard.initial}
      whileInView={VariantsForCard.animate(id)}
      custom={id}
    >
      <ProjectImage src={image} alt={alt} />
      <Content>
        <Title>
          {title}
          <ProjectInfoBox>
            <ResponsiveComponent isResponsive={responsive.isResponsive}>
              <FaRegCircleCheck />
              <span>{responsive.responsiveText}</span>
            </ResponsiveComponent>
            <IconsComponent
              linkForLivePreview={livePreview}
              linkForCodePreview={codePreview}
            />
          </ProjectInfoBox>
        </Title>
        <Desription>{description}</Desription>
      </Content>
      <ProjectBoxTags>
        {tags.map((tag, index) => (
          <ProjectTagItem key={index}>{tag}</ProjectTagItem>
        ))}
      </ProjectBoxTags>
    </ProjectBox>
  );
}

export default Project;
