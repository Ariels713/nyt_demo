import styled from "styled-components";
import NytLogo from "./NytLogo";

function Navigaiton() {
  return (
    <>
      <Wrapper>
        {/* Utilities styles are coming from styles/GlobalStyle.js */}
        <ul role="list" className="layout-flex">
          <li>
            <NytLogo />
          </li>
        </ul>
        <SubscribeButton>subscribe</SubscribeButton>
      </Wrapper>
    </>
  );
}

export default Navigaiton;

const Wrapper = styled.div`
  background-color: var(--color-primary);
  padding-block-start: 1.25rem;
  padding-block-end: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & ul {
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 1040px) {
    border-bottom: solid 1px hsla(0, 0%, 89%, 1);
  }
`;

const SubscribeButton = styled.button`
  display: none;
  padding-inline: 1em;
  padding-block: 0.65em;
  text-transform: uppercase;
  font-weight: 300;
  background-color: var(--color-primary);
  border: solid 1px var(--color-secondary);
  border-radius: 5px;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  margin-inline-end: 2.25rem;
  margin-inline-start: -8rem;

  @media (min-width: 1024px) {
    display: block;
  }
`;
