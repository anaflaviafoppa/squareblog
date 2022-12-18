import {css } from "frontity";

export const style = css`
  .item-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  .item-main__content h1 {
    text-transform: uppercase;
    display: flex;
    grid-column: auto;
    align-items: baseline;
  }
  
  .item-main__image {
    background-color: lightgoldenrodyellow;
  }
  
  .item-main__revert .item-main__image {
    grid-row: 1;
  }
`;