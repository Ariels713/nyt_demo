import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

function CardWithOptionalImage({
  imageSrc,
  alt,
  backgroundColor,
  copy,
  cardHeight = "384px",
  buttonCopy,
}) {
  return (
    <CardWrapper>
      <BaseColor backgroundColor={backgroundColor} cardHeight={cardHeight} />
      <Body place="start">
        <Copy>{copy}</Copy>
        <Explore>{buttonCopy}</Explore>
      </Body>
      {imageSrc === undefined ? null : (
        <Image
          // Addind placement in our grid without.
          place="end center"
          src={imageSrc}
          alt={alt}
        />
      )}
    </CardWrapper>
  );
}

export default CardWithOptionalImage;

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
  /* width: 100%; */
  @media (min-width: 768px) {
    max-width: 403px;
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
  width: 70%;
  @media (min-width: 640px) {
    display: none;
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
    padding-inline-start: 2rem;
  }
`;

// Adding Filter, postioned absolutly, will sit on top of container.
const BaseColor = styled.div`
  width: 100%;
  min-height: ${(props) => props.cardHeight};
  background-color: ${(props) => props.backgroundColor};

  @media (min-width: 640px) {
    min-height: 277px;
    /* width: 441px; */
  }

  /* @media (min-width: 768px) {
    min-height: 434px;
  } */
`;

CardWithOptionalImage.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};
