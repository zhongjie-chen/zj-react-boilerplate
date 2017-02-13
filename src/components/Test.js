/*
  global DEVELOPMENT
*/
import React, { PropTypes } from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: '123',
    };
  }

  render() {
    return (<div>2221oMyCompone11{this.state.hello}</div>);
  }
}

Test.propTypes = {
  hi: PropTypes.string,
};
Test.defaultProps = {
  hi: 'cnm',
};
