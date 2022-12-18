import {css } from "frontity";

export const style = css`
    .cards-container {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: var(--size-40);
      row-gap: var(--size-40);
      padding-top: var(--size-40);
    }
  
  .item-card__image {
    background-color: lightgoldenrodyellow;
    height: var(--size-268);
  }
`;