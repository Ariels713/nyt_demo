import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

function CardWithBodyImage({ imageSrc, alt, backgroundColor, copy }) {
  return (
    <CardWrapper>
      <BaseColor backgroundColor={backgroundColor} />
      <Body place="start">
        <Copy>{copy}</Copy>
        <Explore>Explore</Explore>
      </Body>

      <Image
        // Addind placement in our grid without.
        place="end center"
        src={imageSrc}
        alt={alt}
      />
    </CardWrapper>
  );
}

export default CardWithBodyImage;

const CardWrapper = styled.div`
  /* 👇🏼 Creates stacking context relative to this wrapper/component */
  isolation: isolate;
  position: relative;
  display: grid;
  grid-template-areas: "Stack";
  place-items: center;
  padding-inline: 15px;
  & > * {
    grid-area: Stack;
  }
  min-width: 384px;
  @media (min-width: 768px) {
    max-width: 384px;
    padding-inline: 0px;
  }
`;

const Body = styled.div`
  place-self: ${(props) => props.place};
`;

const Image = styled.img`
  place-self: ${(props) => props.place};
  object-fit: contain;
  object-position: 50% 50%;
  width: 38%;
  @media (min-width: 768px) {
    place-self: end;
    margin-right: 2rem;
  }
`;

const Copy = styled.p`
  margin-inline: 1.25rem;
  margin-block: 2rem;
  line-height: 25px;
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: bold;

  @media (min-width: 640px) {
    padding-inline: 2rem;
    padding-block-start: 3rem;
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  @media (min-width: 768px) {
    margin-inline: 1.25rem;
    margin-block-end: 1rem;
    margin-block-start: 0;
    line-height: 28px;
    color: var(--color-primary);
    font-size: 1.55rem;
    font-weight: bold;
  }
`;

const Explore = styled.span`
  display: block;
  margin-inline: 1.25rem;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: bold;
  font-size: 0.85rem;

  @media (min-width: 640px) {
    padding-inline: 2rem;
  }
`;

// Adding Filter, postioned absolutly, will sit on top of container.
const BaseColor = styled.div`
  width: 100%;
  min-height: 384px;
  background-color: ${(props) => props.backgroundColor};

  @media (min-width: 640px) {
    min-height: 100vh;
  }

  @media (min-width: 768px) {
    min-height: 434px;
  }
`;

CardWithBodyImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};
