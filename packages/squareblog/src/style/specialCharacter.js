import {css } from "frontity";

export const specialCharacter = css`
  .title-border {
    border-bottom: var(--border);
    padding-bottom: var(--size-8);
  }
  
  .title-border h3 {
    text-transform: uppercase;
    margin: 0;
  }
  
  .title-border-container > p {
    margin-top: var(--size-8);
    font-size: var(--size-14);
    color: var(--color-gray);
    font-weight: var(--font-bold);
  }
`