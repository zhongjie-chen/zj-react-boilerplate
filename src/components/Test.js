/*
  global DEVELOPMENT
*/
import React, { PropTypes } from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 1,
    };
  }

  render() {
    return (
      <div>
        <h1>{ this.state.hello }</h1>
        2221oMyCompone11
        <button onClick={() => this.setState({ hello: this.state.hello + 1 })}>+</button>
      </div>
    );
  }
}

Test.propTypes = {
  hi: PropTypes.string,
};
Test.defaultProps = {
  hi: 'cnm',
};
