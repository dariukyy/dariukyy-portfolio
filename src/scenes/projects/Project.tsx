import { FaRegCircleCheck } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

import IconsComponent from "./IconsComponent";
import ProjectBox from "./styled-components/ProjectBox";
import ProjectImage from "./styled-components/ProjectImage";
import Content from "./styled-components/Content";
import Title from "./styled-components/Title";
import ProjectInfoBox from "./styled-components/ProjectInfoBox";
import Description from "./styled-components/Description";
import ResponsiveComponent from "./styled-components/ResponsiveComponent";

import { ProjectBoxTags, ProjectTagItem } from "./styled-components/Tags";
import { useTranslation } from "react-i18next";

type ProjectProps = {
  tags: string[];
  image: string;
  livePreview: string;
  codePreview: string;
  alt: string;
  responsive: { isResponsive: boolean; responsiveText?: string };
  id: number;
};

function Project({
  tags,
  image,
  livePreview,
  codePreview,
  alt,
  responsive: { isResponsive },
  id,
}: ProjectProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const { t } = useTranslation();

  const translatedTitle = t(`projects.${id}.title`);
  const translatedDescription = t(`projects.${id}.description`);
  const translatedResponsiveText = t(`projects.${id}.responsiveText`);

  const VariantsForCard = {
    initial: {
      opacity: 0,
      x: 100,
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
      ref={ref}
      viewport={{ once: true }}
      initial={VariantsForCard.initial}
      animate={inView && VariantsForCard.animate(id)}
    >
      <Content>
        <Title>
          {translatedTitle}
          <ProjectInfoBox>
            <ResponsiveComponent $isResponsive={isResponsive}>
              <FaRegCircleCheck />
              <span>{translatedResponsiveText}</span>
            </ResponsiveComponent>
            <IconsComponent
              linkForLivePreview={livePreview}
              linkForCodePreview={codePreview}
            />
          </ProjectInfoBox>
        </Title>
        <Description>{translatedDescription}</Description>
      </Content>
      <ProjectBoxTags>
        {tags.map((tag, index) => (
          <ProjectTagItem key={index}>{tag}</ProjectTagItem>
        ))}
      </ProjectBoxTags>
      <ProjectImage src={image} alt={alt} />
    </ProjectBox>
  );
}

export default Project;
