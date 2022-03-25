import styled from "styled-components";
import ImageCardCenteredCopy from "../ImageCards/ImageCardCenteredCopy";

function MovingImages() {
  return (
    <Wrapper>
      <ImageCardCenteredCopy
        backgroundImage="https://mwcm.nyt.com/dam/LP/brand/1619/video/Overlooked_Comp.gif"
        alt="Gif and black and white exposures"
        header="Overlooked"
        copy="Profiling notable individuals who never received a Times obituary"
        imageSrc="null"
      />
      <ImageCardCenteredCopy
        backgroundImage="https://mwcm.nyt.com/dam/LP/brand/1619/video/BHC-Desktop-663x426.gif"
        alt="Gif and black and white exposures"
        header="Black History, Continued"
        copy="This series explores pivotal moments and transformative figures in Black culture."
        imageSrc="null"
      />
    </Wrapper>
  );
}

export default MovingImages;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
