import { Component, ReactNode, Fragment } from "react";

type MyProps = {
  value: string;
  age: number;
};

type MyState = {
  cnt: number;
  name: string;
};

export class TitleText extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { cnt: this.props.age, name: "" };
  }

  addCounter() {}

  render(): ReactNode {
    return (
      <Fragment>
        <div>{this.props.value}</div>
        <div>{this.state.cnt}</div>
        <div>{this.state.name}</div>
        <button onClick={(e) => this.addCounter()}>Add</button>
      </Fragment>
    );
  }
}
