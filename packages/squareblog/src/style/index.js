import {css } from "frontity";

export const commonStyle = css`
  @font-face {
    font-family: 'Inter';
    src: url('Inter-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: 'InterLight';
    src: url('Inter-Light.ttf') format('ttf');
  }

  :root {
    --color-yellow: #FEBD1D;
    --color-brown: #2E2E2E;
    --color-light-gray: #E4E4E4;
    --color-black: #2A2A2A;
    --color-white: #FFFFFF;
    --color-gray: #555555;
    --color-transparent: rgba(0,0,0,0);
    
    --multiplier:1;


    --font-family-inter: 'Inter';
    --font-family-inter_light: 'InterLight';
    --font-family-mont: 'Montserrat';

    --font-lightner: 300;
    --font-light: 400;
    --font-normal: 500;
    --font-bold: 600;

    --size-560: calc(560px*var(--multiplier));
    --size-178: calc(178px*var(--multiplier));
    --size-100: calc(100px*var(--multiplier));
    --size-80: calc(80px*var(--multiplier));
    --size-56: calc(56px*var(--multiplier));
    --size-52: calc(52px*var(--multiplier));
    --size-42: calc(42px*var(--multiplier));
    --size-40: calc(40px*var(--multiplier));
    --size-32: calc(32px*var(--multiplier));
    --size-24: calc(24px*var(--multiplier));
    --size-20: calc(20px*var(--multiplier));
    --size-18: calc(18px*var(--multiplier));
    --size-16: calc(16px*var(--multiplier));
    --size-14: calc(14px*var(--multiplier));
    --size-12: calc(12px*var(--multiplier));
    --size-8: calc(8px*var(--multiplier));

    --line-height-multiply: 1.2;

    --border: solid 1px var(--color-yellow);
    --border-gray: solid 1px var(--color-light-gray);
    
    --transition: all ease-in-out 0.3s;
  }


  body {
    margin: 0;
    font-family: var(--font-family-inter);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-weight: var(--font-bold);
    font-size: var(--size-40);
    line-height: calc(var(--size-40) * var(--line-height-multiply));
  }

  h3 {
    font-weight: var(--font-bold);
    font-size: var(--size-24);
    line-height: calc(var(--size-24) * var(--line-height-multiply));
    margin: 0;
  }

  p {
    font-weight: var(--font-light);
    font-size: var(--size-16);
    line-height: calc(var(--size-16) * var(--line-height-multiply));
    margin: 0;
  }

  .container {
    padding: var(--size-32) var(--size-80);
  }

  .container-x {
    padding: 0 var(--size-80);
  }

  .out-lined {
    border-bottom: var(--border);
  }
  
  .light-font {
    font-family: var(--font-family-inter_light);
  }
`;


