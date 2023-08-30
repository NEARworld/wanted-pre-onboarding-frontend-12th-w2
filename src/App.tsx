import React from 'react';

import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { router } from 'router/router';
import { GlobalStyle } from 'styles/globalStyles';
import './App.css';

function App() {
  return (
    <StyledContainer>
      <GlobalStyle />
      <RouterProvider router={router} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

export default App;
