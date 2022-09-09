import styled from 'styled-components'

export const Div = {
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
