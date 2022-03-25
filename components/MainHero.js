import styled from "styled-components";

function MainHero() {
  return (
    <>
      <Section>
        <HeroWrapper>
          <HeaderCopy>
            <Span>The truth can change</Span>
            <Span>how we see the world</Span>
          </HeaderCopy>
          <ParagraphCopy>
            The New York Times covers the world in all its complexity, providing
            deeply reported journalism that examines the forces shaping our
            past, present and future. The 1619 Project exemplifies that rigor,
            exploring the foundational role that slavery has played in our
            nation.
          </ParagraphCopy>
        </HeroWrapper>
      </Section>
    </>
  );
}

export default MainHero;

const Section = styled.section`
  margin-block: 2.5vh;
`;

const HeroWrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  display: grid;
  place-content: center;
  padding-inline: 1rem;
  font-family: nyt-franklin, Helvetica Neue, Arial, sans-serif;

  @media (min-width: 640px) {
    padding-inline: 1.25rem;
  }

  @media (min-width: 1024px) {
    padding-block: 1rem;
    padding-inline: 2rem;
  }
`;

const HeaderCopy = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder;
  letter-spacing: -0.025em;
  line-height: 1.25;
  text-align: center;
  @media (min-width: 640px) {
    font-size: 3.5rem;
    line-height: 3.5rem;
    word-spacing: 0.25rem;
  }
`;

const Span = styled.span`
  display: block;
`;

const ParagraphCopy = styled.p`
  margin-top: 1.25rem;
  font-weight: 400;
  font-size: 0.8rem;
  max-width: 47ch;
  text-align: center;
  margin-block-end: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
    max-width: 55ch;
  }
  @media (min-width: 1024px) {
    font-size: 1.25rem;
    max-width: 85ch;
  }
`;
