import styled from 'styled-components'
import { statusType, statusColors } from './types'

export const Div = {
  container: styled.div`
    table {
      min-width: 600px;
    }
    th {
      background-color: var(--Gray-600);
      padding: 1rem;
      text-align: left;
      color: var(--Gray-100);

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: var(--Gray-700);
      color: var(--Gray-300);
      border-top: 4px solid var(--Gray-800);
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 40%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  `,
}

/* eslint-disable */

export const Span = {
  status: styled.span(({ color }: { color: statusType }) => `
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(${statusColors[color]});
    }
  `),
}
