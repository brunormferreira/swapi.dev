import { createGlobalStyle } from 'styled-components';

import bg from '../images/bg.jpg';
import { colors } from './variables';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900&display=swap');

* {
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: ${colors.black};
  background-image: url(${bg});
}

body::-webkit-scrollbar {
  background-color: ${colors.black};
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: ${colors.yellow};
}
`;

export default GlobalStyle;
