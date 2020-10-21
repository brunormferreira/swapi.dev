import { createGlobalStyle } from 'styled-components';

import bg from '../images/bg.jpg';

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

  background-image: url(${bg});

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
}
`;

export default GlobalStyle;
