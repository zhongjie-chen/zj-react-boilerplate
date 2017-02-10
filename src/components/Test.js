import React, { PropTypes } from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hi',
    };
  }

  render() {
    return (<div>fooMyComponent11</div>);
  }
}

Test.propTypes = {
  hi: PropTypes.string,
};
Test.defaultProps = {
  hi: 'cnm',
};
