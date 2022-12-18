import {css } from "frontity";

export const style = css`
    .navbar {
      background: var(--color-black);
      height: var(--size-100);
      color: var(--color-white);
     display: flex;
     align-items: center;
      justify-content: space-between;
    }
  
  .navbar-icon {
    height: fit-content;
  }
  
  .navbar-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .navbar-link {
    margin-right: var(--size-42);
    font-size: var(--size-16);
  }
  
  .navbar-link span{
    font-size: var(--size-16);
  }
  
  .navbar-link:last-child {
    margin-right: 0px;
  }
  
  
  .navbar-link a {
    color: var(--color-white);
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-16);
    line-height: calc(var(--size-16) * var(--line-height-multiply));
    margin-right: var(--size-18);
  }
  
  .navbar-search {
    font-size: var(--size-20);
    font-weight: var( --font-bold);
    min-width: var(--size-56);
    display: flex;
    justify-content: center;
  }

  .navbar-search:hover {
    cursor: pointer;
  }
  
  
  
  
`