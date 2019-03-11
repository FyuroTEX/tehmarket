import React, { Fragment } from 'react';
import HeaderMenu from './components/header/header';
import { Container, Sticky } from 'semantic-ui-react';
import './App.css';
const App = ({ children }) => (
  <Fragment>
    <Container>
      {/* <Sticky> */}
      <HeaderMenu>
      {children}
        </HeaderMenu>
      {/* </Sticky> */}
        {/* {children} */}
      
    </Container>
  </Fragment>
);
// const App = ({ children }) => (
//   <Fragment>
//     <Container>
//       <HeaderMenu>
//         {children}
//       </HeaderMenu>
//     </Container>
//   </Fragment>
// );

export default App;
