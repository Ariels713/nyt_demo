import styled from "styled-components";

function SubscribeHero() {
  return (
    <Wrapper>
      <SubHeader>Support Our Journalism</SubHeader>
      <Copy>
        A subscription to The New York Times is critical in making such
        reporting possible. We hope you will stand with us in supporting
        independent journalism.
      </Copy>
      <SubscribeButton>Subscribe</SubscribeButton>
    </Wrapper>
  );
}

export default SubscribeHero;

const Wrapper = styled.div`
  margin-block-start: 6rem;
  background-color: hsla(120, 0%, 89%, 1);
  min-height: 442px;
  padding-inline: 4rem;
  padding-block: 3rem;
  text-align: center;
`;
const SubHeader = styled.p`
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: bold;
  margin-block-start: 3rem;
  margin-block-end: 1.5rem;
  letter-spacing: 2px;
`;
const Copy = styled.p`
  font-weight: 300px;
  font-size: 1.75rem;
  line-height: 37px;
  font-family: serif;
  margin-block-end: 1.5rem;
`;

const SubscribeButton = styled.button`
  display: block;
  margin: auto;
  padding-inline: 1em;
  padding-block: 0.65em;
  text-transform: uppercase;
  font-weight: 300;
  color: var(--color-primary);
  background-color: var(--color-secondary);
  border: transparent;
  border-radius: 5px;
  font-size: 0.8rem;
  letter-spacing: 0.5px;

  @media (min-width: 1024px) {
    display: block;
  }
`;
