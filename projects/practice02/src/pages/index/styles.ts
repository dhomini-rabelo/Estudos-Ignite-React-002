import styled from 'styled-components'

export const Header = {
  container: styled.header`
    a {
      border: 2px solid transparent;
    }
    a.active {
      border: 2px solid var(--Yellow-800);
    }
  `,
}

export const Div = {
  coffee: styled.div`
    border-radius: 6px 36px;

    .type {
      border-radius: 100px;
    }

    img.coffee-image-product {
      top: -1.25rem;
    }
  `,
}
