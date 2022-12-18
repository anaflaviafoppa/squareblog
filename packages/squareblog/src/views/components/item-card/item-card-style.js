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
  
  .item-card__description {
    padding: var(--size-24);
    height: var(--size-268);
    display: flex;
    flex-flow: row wrap;
  }
  
  .item-card__description h3 {
    margin-bottom: var(--size-16);
  }

  .item-card__description div p {
    margin-bottom: var(--size-24);
  }
  
  .item-card__description--date {
    align-self: flex-end;
    font-size: var(--size-12);
    color: var(--color-balance-gray);
  }

  


`;