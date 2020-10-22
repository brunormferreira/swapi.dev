import React from 'react';

import { useModal } from './context/modal';

import GlobalStyles from './assets/styles/globals';

import Main from './pages/Main.page';
import Modal from './components/Modal/Modal.component';

const App: React.FC = () => {
  const { state } = useModal();

  return (
    <>
      {state.isVisible && <Modal />}
      <GlobalStyles />
      <Main />
    </>
  );
};

export default App;
