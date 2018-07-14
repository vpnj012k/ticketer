import * as React from "react";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { MessageBlock } from "components/message_block";
import { createMessageHash } from "util/hash";
import { generateFakeTimes } from "util/time";

const { Component, Fragment } = React;

const messagesWrapperStyle = {
  marginTop: 70,
  marginBottom: 50,
  padding: "0 12px",
  backgroundColor: "#fafafa"
};

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
        <div style={messagesWrapperStyle}>
          {this.fakeTimes.map(fakeTime => (
            <MessageBlock {...fakeTime} key={fakeTime.messageHash} />
          ))}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
