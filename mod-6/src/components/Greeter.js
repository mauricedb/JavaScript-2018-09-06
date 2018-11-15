import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeter extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired
  };

  render() {
    const firstName = this.props.firstName;

    return <div>Hallo {firstName}</div>;
  }
}

export default Greeter;
