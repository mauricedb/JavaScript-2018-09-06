import React, { Component } from 'react';

class PersonEditor extends Component {
  onChange = e => {
    const { changeValue } = this.props;
    changeValue('firstName', e.target.value);
    // console.log(e.target.value);
  };

  render() {
    const {
      person: { firstName }
    } = this.props;

    return (
      <div>
        <input type="text" value={firstName} onChange={this.onChange} />
      </div>
    );
  }
}

export default PersonEditor;
