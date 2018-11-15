import React, { Component } from 'react';
import { __await } from 'tslib';

class Jokes extends Component {
  state = {
    jokes: null
  };

  async componentDidMount() {
    const url =
      'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

    const rsp = await fetch(url);
    const data = await rsp.json();
    const jokes = data.value;
    this.setState({
      jokes,
      jsx: (
        <div>
          Hallo {rsp.ok ? 'Ja' : 'Nee'} {url}
        </div>
      )
    });
  }

  render() {
    const { jokes, jsx } = this.state;

    if (!jokes) return <div>Loading....</div>;

    return (
      <div className='demo' id="{movies}">
        {jsx}
        <ul>
          {jokes.map(joke => (
            <li key={joke.id} id={`joke-${joke.id}`}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Jokes;
