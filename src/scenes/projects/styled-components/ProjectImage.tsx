import styled from "styled-components";

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
  transition: transform 0.3s ease-in-out;
  border-top-left-radius: var(--border-radius-lg);
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.4))
    grayscale(var(--image-grayscale)) opacity(var(--image-opacity));

  &:hover {
    transform: scale(1.04) translateX(-0.75rem) translateY(0.75rem)
      rotate(-2deg);
  }

  @media (max-width: 883px) {
    width: 32rem;
  }

  @media (max-width: 544px) {
    left: 50%;
    bottom: 14%;
    transform: translate(-50%, 21.5%);
    /* object-fit: cover; */
    /* object-position: top center; */
    width: 93%;
    height: 30rem;
    border-radius: var(--border-radius-lg);
    filter: drop-shadow(0 4px 10px rgb(0 0 0 / 0.2));
    border: 2px solid var(--color-grey-200);

    &:hover {
      transform: translate(-50%, 21.5%) scale(1.01);
    }
  }
`;

export default ProjectImage;
