import styled from 'styled-components'

export const Div = {
  countDown: styled.div`
    font-size: 10rem;
    line-height: 8rem;
    font-family: 'Roboto Mono', monospace;
  `,

  inputsContainer: styled.div`
    .input-pomo {
      background: transparent;
      height: 2.5rem;
      border: 0;
      border-bottom: 2px solid var(--Gray-500);
      font-weight: bold;
      font-size: 1.125rem;
      padding: 0 0.5rem;
      color: var(--Gray-100);
    }

    .input-pomo::placeholder {
      color: var(--Gray-500);
    }

    .input-pomo:focus {
      box-shadow: none;
      border-color: var(--Green-500);
    }

    .input-pomo::-webkit-calendar-picker-indicator {
      display: none !important;
    }
  `,
}
