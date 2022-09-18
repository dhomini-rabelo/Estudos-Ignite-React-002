import styled from 'styled-components'

export const Header = {
  container: styled.header`
    a {
      border: 2px solid transparent;
    }
    a.active {
      border: 2px solid var(--Yellow-800);
    }
    .items-counter {
      right: -8.35px;
      top: -8px;
    }
  `,
}
