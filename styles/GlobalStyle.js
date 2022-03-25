import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    ${"" /* Color Pallete */}
      --color-primary:hsla(0, 0%, 100%, 1.00);
      --color-secondary:hsla(0, 0%, 0%, 1.00); 
      --color-tertiary: hsla(0, 0%, 24%, 1.00);
      --color-accent: hsla(120, 0%, 89%, 1.00);

      ${"" /* Breakpoints */}
      --screen-small:640px; 
      --screen-medium:768px; 
      --screen-large:1024px;
      --xl-screen:1280px; 
      --2xl-screen: 1536px; 
  }

  /* Uncomment when we need help debugging, will add red outline on every element */
  /* * {
    outline: 1px solid red;
  } */
/*
  1. Use a more-intuitive box-sizing model.
*/

*, *::before, *::after {
  box-sizing: border-box;
}
/* 2. Remove default margin for common elements */
body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, ul, ol, dl, dt, dd {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%
}
/*
  4. Improve the typography across the site.
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  ${"" /* Modern CSS Reset */}
  text-rendering: optimizeSpeed;
  /* 🟣 Set base font-family */
  font-family: system-ui, sans-serif;
}
/* 5. Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* 6. Inherit fonts for inputs and buttons */
input, button, textarea, select {
  font: inherit;
}
/*
  7. Create a root stacking context
*/
#__next {
  isolation: isolate;
  height:100%;
}

${"" /* Modern CSS Reset Start */}

:where(ul, ol):where([role="list"]) {
  margin: 0;
  padding: 0;
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}
a:not([class]) {
  /* 🟣 Relatively sized thickness and offset */
  text-decoration-thickness: max(0.08em, 1px);
  text-underline-offset: 0.15em;
}

img[width] {
  height: auto;
}

.nextImage {
    width:100%; 
    height: 100%;
    object-fit: cover;
    object-position: center;
}

:target {
  scroll-margin-top: 2rem;
}

:focus {
  scroll-margin-bottom: 8vh;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}

${"" /* Utility Classes */}
 
 .layout-flex {
   --gap: 2rem;
  --wrap: wrap;

  display: flex;
  flex-wrap: var(--wrap);
  gap: var(--gap);

 }

`;

export default GlobalStyle;
