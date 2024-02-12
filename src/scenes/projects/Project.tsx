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
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

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
      ref={ref}
      viewport={{ once: true }}
      initial={VariantsForCard.initial}
      animate={inView && VariantsForCard.animate(id)}
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
        <Description>{description}</Description>
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
