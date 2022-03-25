import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

import BaseImage from "../ImageCards/BaseImage";
import PlayButton from "../video/PlayButton";

function AudioImage({ backgroundImage, header, copy, imageSrc }) {
  return (
    <CardWrapper>
      <BaseImage
        src={backgroundImage}
        alt="The ocean and Horizon"
        variant="image_blog"
        max_height="986px"
        min_height="649px"
        width="100%"
        height="null"
      />
      <ButtonContainer place="start center">
        <PlayButton />
        <Listen>Listen</Listen>
      </ButtonContainer>
      <Body place="center">
        <Copy>{copy}</Copy>
      </Body>
      <SubHeader place="end center">
        <p>Nikole Hannah-Jones</p>
        <p>New YOrk Times Magazine Correspondent</p>
        <p>and creator of The 1619 Project</p>
      </SubHeader>
    </CardWrapper>
  );
}

export default AudioImage;

const CardWrapper = styled.div`
  /* 👇🏼 Creates stacking context relative to this wrapper/component */
  isolation: isolate;
  position: relative;
  display: grid;
  grid-template-areas: "Stack";
  place-items: center;
  padding-block-start: 5rem;
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

const SubHeader = styled.p`
  font-size: 1rem;
  color: var(--color-primary);
  text-align: center;
  place-self: ${(props) => props.place};
  margin-block-end: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Copy = styled.p`
  z-index: 3;
  margin-inline: 3rem;
  margin-block: 1rem;
  line-height: 46px;
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  font-family: serif;

  @media (min-width: 768px) {
    max-width: 622px;
    margin-inline: auto;
    font-size: 1.5rem;
    line-height: 25px;
  }
`;

const Listen = styled.span`
  display: block;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 500;
  text-align: center;
  font-size: 0.85rem;
`;

const ButtonContainer = styled.div`
  margin-block-start: 2rem;
  place-self: ${(props) => props.place};
`;

AudioImage.propTypes = {
  imageSrc: PropTypes.string,
  alt: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
};
