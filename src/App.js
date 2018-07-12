import * as React from "react";
import { Header } from "components/header";
import { MessageBlock } from "components/message_block";
import { createMessageHash } from "util/hash";
import { generateFakeTimes } from "util/time";

const { Component, Fragment } = React;

class App extends Component {
  constructor() {
    super();
    this.fakeTimes = generateFakeTimes().map(fakeTime => ({
      ...fakeTime,
      messageHash: createMessageHash()
    }));
  }
  render() {
    return (
      <Fragment>
        <Header />
        {this.fakeTimes.map(fakeTime => (
          <MessageBlock {...fakeTime} key={fakeTime.messageHash} />
        ))}
      </Fragment>
    );
  }
}

export default App;
