import styled from "styled-components";
import ImageCardCenteredCopy from "../ImageCards/ImageCardCenteredCopy";

function MovingImages() {
  return (
    <Grid>
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
    </Grid>
  );
}

export default MovingImages;
// const Wrapper = styled.div`
//   max-width: 1215px;
//   margin: auto;
//   display: flex;
// `;
const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(372px, 100%), 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(min(372px, 100%), 1fr));
  }
`;
