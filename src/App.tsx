import React from 'react';

import { RouterProvider } from 'react-router-dom';

import { router } from 'router/router';
import { GlobalStyle } from 'styles/globalStyles';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
