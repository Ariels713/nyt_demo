import styled from "styled-components";

function SubHero() {
  return (
    <Wrapper>
      <Header>More Reporting</Header>
      <Copy>
        The Times is commited to telling stories that offer new ways of seeing
        the world
      </Copy>
    </Wrapper>
  );
}

export default SubHero;

const Wrapper = styled.div`
  padding-inline: 2rem;
  padding-block-start: 4rem;
  padding-block-end: 2rem;
  text-align: center;
`;

const Header = styled.h2`
  padding-block-end: 1rem;
  font-family: serif;
  font-size: 2.5rem;
`;

const Copy = styled.p`
  font-weight: 300;
`;
