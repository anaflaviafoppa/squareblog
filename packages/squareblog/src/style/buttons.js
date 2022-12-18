import {css } from "frontity";

export const buttonsStyle = css`
  button {
    outline: none;
    border: none;
    height: var(--size-56);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-light);
    font-size: var(--size-16);
    line-height: calc(var(--size-16) * var(--line-height-multiply));
  }
  
  button:hover {
    border: none;
    cursor: pointer;
    transition: all ease-in-out 0.7s;
  }
  
  .button-primary,.button-secondary:hover {
    background-color: var(--color-yellow);
    color: var(--colo-black);
  }
  
  .button-secondary {
    border: var(--border);
    color: var(--color-yellow);
    background-color: var(--color-transparent);
  }
  
  .button-primary__dark {
    color: var(--color-yellow);
    background-color: var(--color-black);
  }
  
  .button-primary__rounded {
    text-transform: uppercase;
    border-radius: var(--size-8);
    padding: 0 var(--size-16);
    color: var(--color-black);
    font-family: var(--font-family-inter);
    font-style: normal;
    font-weight: var(--font-normal);
    font-size: var(--size-16);
    line-height: calc(var(--size-16) * var(--line-height-multiply));
  }
  


  // HOVER
  .button-primary:hover,
  .button-primary__rounded:hover,
  .button-primary__dark:hover  {
    background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
  }
  
  .button-icon {
    margin-right: var(--size-16);
  }

`;