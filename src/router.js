import React, { PropTypes } from 'react';

export default class router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hi',
    };
  }

  render() {
    return (<div>poopone111t</div>);
  }
}

router.propTypes = {
  hi: PropTypes.string,
};
router.defaultProps = {
  hi: 'cnm',
};
