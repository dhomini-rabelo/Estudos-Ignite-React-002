import styled from 'styled-components'

export const Div = {
  container: styled.div`
    max-width: 74rem;
    min-height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    border-radius: 8px;

    #header-links a {
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      color: var(--Gray-100);
    }

    #header-links a.active {
      color: var(--Green-500) !important;
    }

    #header-links a:hover {
      border-bottom: 3px solid var(--Green-500);
    }
  `,
}
