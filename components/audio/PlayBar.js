import styled, { keyframes } from "styled-components";

function PlayBar() {
  return (
    <Wrapper>
      <Rewind xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M14.989 4.16232V0L4.98901 6H13.0714V6.00104C19.109 6.08286 23.978 10.9759 23.978 17C23.978 23.0751 19.0261 28 12.9176 28C7.4959 28 2.98529 24.1202 2.03961 19H0C0.967285 25.2302 6.38239 30 12.9176 30C20.1368 30 25.989 24.1797 25.989 17C25.989 10.5213 21.2238 5.14957 14.989 4.16232Z"
          transform="translate(2)"
        ></path>
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M3.476 7.821V0.121H0.363L-1.79291e-07 1.683H1.54V7.821H3.476ZM8.92 7.942C6.951 7.942 5.785 6.347 5.785 3.971C5.785 1.584 6.951 -9.91821e-08 8.92 -9.91821e-08C10.878 -9.91821e-08 12.022 1.584 12.022 3.971C12.022 6.347 10.878 7.942 8.92 7.942ZM8.92 6.281C9.624 6.281 10.086 5.533 10.086 3.971C10.086 2.42 9.624 1.661 8.92 1.661C8.216 1.661 7.743 2.42 7.743 3.971C7.743 5.533 8.216 6.281 8.92 6.281Z"
          transform="translate(9.07812 13.179)"
        ></path>
      </Rewind>
      <Play
        fill="var(--color-primary)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        class="play-triangle-3-_pUfBt"
      >
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M0 40V0L33.6 20L0 40Z"
          transform="translate(3)"
        ></path>
      </Play>
      <FastForward xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M14.989 4.16232V0L4.98901 6H13.0714V6.00104C19.109 6.08286 23.978 10.9759 23.978 17C23.978 23.0751 19.0261 28 12.9176 28C7.4959 28 2.98529 24.1202 2.03961 19H0C0.967285 25.2302 6.38239 30 12.9176 30C20.1368 30 25.989 24.1797 25.989 17C25.989 10.5213 21.2238 5.14957 14.989 4.16232Z"
          transform="translate(27.989) scale(-1 1)"
        ></path>
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M3.476 7.821V0.121H0.363L-1.79291e-07 1.683H1.54V7.821H3.476ZM8.92 7.942C6.951 7.942 5.785 6.347 5.785 3.971C5.785 1.584 6.951 -9.91821e-08 8.92 -9.91821e-08C10.878 -9.91821e-08 12.022 1.584 12.022 3.971C12.022 6.347 10.878 7.942 8.92 7.942ZM8.92 6.281C9.624 6.281 10.086 5.533 10.086 3.971C10.086 2.42 9.624 1.661 8.92 1.661C8.216 1.661 7.743 2.42 7.743 3.971C7.743 5.533 8.216 6.281 8.92 6.281Z"
          transform="translate(9.07812 13.179)"
        ></path>
      </FastForward>
      <Listen>Listen</Listen>
      <StatusBar />
      <VolumeIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M5 6L11 0L13 0V20H11L5 14H0V6H5Z"
          transform="translate(0 2)"
        ></path>
        <path
          fill="var(--color-primary)"
          fillrule="evenodd"
          cliprule="evenodd"
          d="M0 0C1.65685 0 3 1.34315 3 3C3 4.65685 1.65685 6 0 6L0 0Z"
          transform="translate(16 9)"
        ></path>
        <path
          fill="var(--color-primary)"
          d="M0.532837 0.0350647L0 0V1.99994L0.462067 2.0351C3.55962 2.27072 6 4.85941 6 8.01759C6 11.1758 3.55962 13.7645 0.462067 14.0001L0 14.0352V16.0352L0.532837 16.0001C4.70294 15.7256 8 12.2569 8 8.01759C8 3.77834 4.70294 0.309555 0.532837 0.0350647Z"
          transform="translate(16 3.98241)"
        ></path>
      </VolumeIcon>
    </Wrapper>
  );
}

export default PlayBar;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 30fr 1fr;
  max-height: 3rem;
  margin-block-end: 3rem;
  width: 85%;
  margin-inline: auto;
  align-items: center;
  gap: 1rem;
`;
const Listen = styled.span`
  display: block;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 500;
  text-align: center;
  font-size: 0.85rem;
`;
const Rewind = styled.svg`
  width: 30px;
`;
const Play = styled.svg`
  width: 50px;
`;
const FastForward = styled.svg`
  width: 30px;
`;
const StatusBar = styled.div`
  /* flex: 5; */
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: 9999px;
`;
const VolumeIcon = styled.svg`
  width: 30px;
`;
