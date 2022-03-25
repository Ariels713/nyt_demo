import styled, { keyframes } from "styled-components";
import PlayButton from "./PlayButton";

const CardWrapper = styled.div`
  display: grid;
  grid-template-areas: "Stack";
  place-items: center;
  cursor: pointer;

  & > * {
    grid-area: Stack;
  }

  @media (min-width: 1215px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  /* width: 100%; */
  height: 48vh;
  @media (min-width: 768px) {
    height: 65vh;
  }

  /* @media (min-width: 1215px) {
    height: 70vh;
  } */
`;

const Title = styled.div`
  /*  Css Positioning Magic 👇 we'll use props to postion our element */
  place-self: ${(props) => props.place};
`;

function VideoImagePlaceholder() {
  return (
    <CardWrapper>
      <Image
        src="https://mwcm.nyt.com/dam/LP/brand/1619/img/bk-video-dk.png"
        alt="Host of 1816 "
      />
      <Title place="center">
        <PlayButton />
      </Title>
    </CardWrapper>
  );
}

export default VideoImagePlaceholder;
