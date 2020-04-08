// Root component of the application.

// Routes will be set up here, in terms of the styling of the main page below.
// Styling using [Styled-Components](https://styled-components.com/), which makes 
// dev and styling more clear 

// External Packages
import React from 'react';
import styled from 'styled-components';
import Routes from './Routes';

// This doesn't need to go into the Halo website, since it's only here to ensure that
// the container / page I created is rendered correctly.
// I'll make sure to put all the styling in the same file although I generally
// would ensure that they are separated.

// Next step, take a look at the Routes.

const AppRootWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  font-family: 'Muli', sans-serif;
`;

function App() {
  return (
    <AppRootWrapper>
      <Routes />
    </AppRootWrapper>
  );
}

export default App;
