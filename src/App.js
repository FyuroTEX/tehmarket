import React, { Fragment } from 'react';
import Header from './components/header/header';
import { Container } from 'semantic-ui-react'


const App = ({ children }) => (
  <Fragment>
    <Container>
    <Header />
      {children}
      </Container>
  </Fragment>
);

export default App;
