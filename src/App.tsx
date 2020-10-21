import React from 'react';

import GlobalStyles from './assets/styles/globals';

import Main from './pages/Main.page';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
};

export default App;
