import { createGlobalStyle } from 'styled-components';
import FontImports from './FontImports';

const GlobalStyles = createGlobalStyle`
  ${FontImports};

  :root {
    font-size: 93.75%;
    --background: ${p => p.theme.color.light};
    --secondary-background: ${p => p.theme.color.secondaryBg};
    --color: ${p => p.theme.color.dark};
    --accent: ${p => p.theme.color.accent};
    --spacing: ${p => p.theme.spacingSmall};
    --divider: ${p => p.theme.color.divider};
    --header-gradient: ${p => p.theme.gradient.header};

    @media ${p => p.theme.media.small} {
      font-size: 100%;
      --spacing: ${p => p.theme.spacing};
    }

    & body.dark {
      --background: ${p => p.theme.color.dark};
      --color: ${p => p.theme.color.light};
      --secondary-background: ${p => p.theme.color.secondaryBgDark};
      --accent: ${p => p.theme.color.accentDark};
      --divider: ${p => p.theme.color.dividerDark};
      --header-gradient: ${p => p.theme.gradient.headerDark};
    }
  }

  *, *::before, *::after {
    box-sizing: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  html:focus-within {
    @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    }
  }

  body {
    color: var(--color);
    background: var(--background);
    box-sizing: border-box;
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight};
    line-height: 1.75;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection,
  a::selection {
    background-color: var(--accent);
    color: ${p => p.theme.color.light};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  strong {
    font-weight: ${p => p.theme.font.weightBold};
  }

  em {
    font-style: italic;
  }

  code,
  pre {
    font-family: ${p => p.theme.font.familyMono};
    font-size: 0.833rem;
  }

  h1, h2, h3, h4, .h4 {
    font-weight: 700;
    font-size: 2.488rem;
    line-height: 1.2em;
    margin-bottom: 1em;
  }

  h1 {
    font-size: 2.488rem;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 1.728rem;
  }

  h4, .h4 {
    font-size: 1.44rem;
  }

  button {
    font: inherit;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default GlobalStyles;