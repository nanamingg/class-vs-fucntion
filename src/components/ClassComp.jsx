import { Component } from "react";

class ClassComp extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.onClickCount = this.onClickCount.bind(this);
  }

  onClickCount() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  componentDidMount() {
    console.log(`Mount Comp: ${this.state.count}`);
  }
  componentDidUpdate() {
    console.log(`Update Comp: ${this.state.count}`);
  }
  componentWillUnmount() {
    console.log(`Remove Comp ${this.state.count}`);
  }

  render() {
    return (
      <div className="bg-red-100 w-96 h-96 flex justify-center items-center text-6xl">
        {this.state.count}
        <button onClick={this.onClickCount}>+</button>
      </div>
    );
  }
}

export default ClassComp;
