import React, { Component } from 'react';

import PersonEditor from './PersonEditor';

class Person extends Component {
  state = {
    person: {
      firstName: 'Maurice',
      lastName: 'de Beijer'
    }
  };

  changeValue = (name, value) => {
    const { person } = this.state;
    const newPerson = { ...person, [name]: value };
    this.setState({ person: newPerson });
  };

  render() {
    const { person } = this.state;

    return (
      <div>
        <PersonEditor person={person} changeValue={this.changeValue} />
      </div>
    );
  }
}

export default Person;
