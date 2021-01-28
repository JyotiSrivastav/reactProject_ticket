import React, { Component } from "react";
import { render } from "react-dom";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

class Page2 extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      name: "React",
      showHidePage3: false,
      showHidePage4: false,
      showHidePage5: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHidePage3":
        this.setState({ showHidePage3: !this.state.showHidePage3 });
        break;
      case "showHidePage4":
        this.setState({ showHidePage4: !this.state.showHidePage4 });
        break;
      case "showHidePage5":
        this.setState({ showHidePage5: !this.state.showHidePage5 });
        break;
    //   default:
    //     null;
    }
  }

  render() {
    const { showHidePage3, showHidePage4, showHidePage5 } = this.state;
    return (
      <div>
        {showHidePage3 && <Page3 />}
        <hr />
        {showHidePage4 && <Page4 />}
        <hr />
        { showHidePage5 && <Page5 />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("showHidePage3")}>
            Click to hide Demo1 component
          </button>
          <button onClick={() => this.hideComponent("showHidePage4")}>
            Click to hide Demo2 component
          </button>
          <button onClick={() => this.hideComponent("showHidePage5")}>
            Click to hide Demo3 component
          </button>
        </div>
      </div>
    );
  }
}
export default Page2 ;
// render(<App />, document.getElementById("root"));