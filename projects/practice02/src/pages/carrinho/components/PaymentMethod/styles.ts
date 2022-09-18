import styled from 'styled-components'

export const Div = {
  paymentBox: styled.div``,
}

/* eslint-disable */
export const Button = {
  payment: styled.button(({ active }: { active: boolean }) => `

  
    border: 1px solid transparent;
    ${active && `
        border: 1px solid var(--Purple-500);
        background-color: var(--Purple-100);
        &:hover {
          background-color: var(--Purple-200);
        }
    `}
  `),
}
/* eslint-enable */
