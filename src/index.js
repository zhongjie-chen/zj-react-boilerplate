import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
  <AppContainer>
    <Test />
  </AppContainer>,
  document.getElementById('root'),
);
// import { add } from 'utils/calculator';

// document.getElementById('root').innerHTML = add(4, 3);
