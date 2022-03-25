import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import BaseImage from "./BaseImage";

function ImageCardCenteredCopy({ backgroundImage, header, copy, imageSrc }) {
  return (
    <CardWrapper>
      <BaseImage
        src={backgroundImage}
        alt="The ocean and Horizon"
        variant="image_blog"
        max_height="432px"
        min_height="382px"
        width="100%"
        height="null"
      />
      <Body place="center">
        {imageSrc === "null" ? (
          <Header>{header}</Header>
        ) : (
          <Image src={imageSrc} alt="The 1619 Project" />
        )}

        <Copy>{copy}</Copy>
        <Explore>Explore</Explore>
      </Body>
      <Filter />
    </CardWrapper>
  );
}

export default ImageCardCenteredCopy;

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

  @media (min-width: 768px) {
    padding-inline: 0px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  place-self: ${(props) => props.place};
`;

const Image = styled.img`
  z-index: 3;
  object-fit: cover;
  object-position: 50% 50%;
  width: 80%;
  margin: auto;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: var(--color-primary);
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Copy = styled.p`
  z-index: 3;
  margin-inline: 3rem;
  margin-block: 1rem;
  line-height: 19px;
  color: var(--color-primary);
  font-size: 0.85rem;
  font-weight: 300;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 622px;
    margin-inline: auto;
    font-size: 1.5rem;
    line-height: 25px;
  }
`;

const Explore = styled.span`
  display: block;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: bold;
  text-align: center;
  font-size: 0.85rem;
`;

// Adding Filter, postioned absolutly, will sit on top of container.
const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: hsla(41, 26%, 64%, 0.15);
  z-index: 2;
`;

ImageCardCenteredCopy.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};
