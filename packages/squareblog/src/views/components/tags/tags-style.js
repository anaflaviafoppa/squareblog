import {css } from "frontity";

export const style = css`
  .tag-container {
    display: flex;
  }

  .tag {
    padding: var(--size-8);
    text-transform: uppercase;
    margin-right: var(--size-16);
  }

  .tag-clickable:hover {
    cursor: pointer;
    transition: var(--transition);
  }
    
  .tag p {
    text-transform: uppercase;
    font-size: var(--size-12);
    font-family: var(--font-family-inter_light);
    line-height: calc(var(--size-12) * var(--line-height-multiply));
  }

  .tag-primary, .tag-clickable.tag-secondary:hover {
    background: var(--color-light-gray);
  }

  .tag-secondary {
    background: var(--color-transparent);
    border: var(--border-gray);
  }

  .tag-selected {
    background: var(--color-yellow);
  }

  .tag-clickable.tag-selected:hover,
  .tag-clickable.tag-primary:hover {
    background-image: linear-gradient(rgb(0 0 0/20%) 0 0);
  }



`;
