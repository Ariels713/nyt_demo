import styled from 'styled-components'
import CardWithBodyImage from '../ImageCards/CardWithBodyImage'
import CardWithOptionalImage from '../ImageCards/CardWithOptionalImage'
import ImageCardCenteredCopy from '../ImageCards/ImageCardCenteredCopy'

function ImageGrid() {
  return (
    <>
      <GridWrapper>
        <GridArea1>
          <ImageCardCenteredCopy
            backgroundImage='https://mwcm.nyt.com/dam/LP/brand/1619/img/Block-1.png'
            header=''
            copy='Published by The New York Times, the project demonstrates how
          slavery&nbsp;and&nbsp;its legacy have shaped modern America.'
            imageSrc='https://mwcm.nyt.com/dam/LP/brand/1619/img/The-1619.png'
          />
          <CardWithBodyImage
            imageSrc='https://mwcm.nyt.com/dam/LP/brand/1619/img/Block-2_V2021.png'
            alt='The 1619 Project Book Cover'
            backgroundColor='hsla(212, 23%, 56%, 1);'
            copy='A new book expands on the original reporting with new essays and poems
            that illuminate slavery’s role in present-day America.'
          />
        </GridArea1>
        <GridArea1>
          <CardWithBodyImage
            imageSrc='https://mwcm.nyt.com/dam/LP/brand/1619/img/Block-3.png'
            alt='Mobile phone on NYT Website'
            backgroundColor='hsla(41, 17%, 68%, 1.00)'
            copy='A five-part audio narrative series examines the impact of slavery.'
          />

          <ImageCardCenteredCopy
            backgroundImage='https://mwcm.nyt.com/dam/LP/brand/1619/img/Block-4_2.png'
            header='A powerful Vision'
            copy='The 1619 Project was intended to consider the connection of&nbsp;America’s past with its present. '
            imageSrc='null'
          />
        </GridArea1>
        <GridArea2>
          <CardWithOptionalImage
            imageSrc='https://mwcm.nyt.com/dam/LP/brand/1619/img/Block-2.png'
            alt='Mobile phone on NYT Website'
            backgroundColor='hsla(211, 11%, 67%, 1.00)'
            copy='A special curriculum gives students a fuller understanding of slavery.'
            buttonCopy='Learn More'
          />

          <CardWithOptionalImage
            backgroundColor='hsla(211, 20%, 64%, 1.00)'
            copy='Show your support with special edition merchandise from our store'
            cardHeight='190px'
            buttonCopy='Shop'
          />

          <CardWithOptionalImage
            backgroundColor='hsla(41, 26%, 63%, 1.00)'
            copy='Honoring an important anniversary'
            cardHeight='190px'
            buttonCopy='Learn More'
          />
        </GridArea2>
      </GridWrapper>
    </>
  )
}

export default ImageGrid

const GridWrapper = styled.div`
  display: grid;
  gap: 0.85rem;
`

const GridArea1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-inline: auto;
  &:first-child {
    margin-top: 4rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.85rem;
  }
`

const GridArea2 = styled.div`
  --min-column-width: min(320px, 100%);
  display: grid;
  padding: 16px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--min-column-width), 1fr)
  );
  gap: 16px;
  padding: 16px;
  &:first-child {
    margin-top: 4rem;
  }

  /* @media (min-width: 768px) {
    flex-direction: row;
    gap: 0.85rem;
  } */
`
