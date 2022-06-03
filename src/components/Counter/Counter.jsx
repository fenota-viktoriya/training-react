import React from 'react';
import Controls from './Controls';

import { CounterWrapper, CurrentValue } from './Counter.styled';

export default class Counter extends React.Component {
  static defaultProps = {
    iValue: 0,
  };
  state = {
    value: this.props.iValue,
  };
  handelIncrement = () => {
    this.setState(num => {
      return {
        value: num.value + 1,
      };
    });
  };
  handelDecrement = () => {
    this.setState(num => {
      return {
        value: num.value === 0 ? 0 : num.value - 1,
      };
    });
  };
  render() {
    return (
      <CounterWrapper>
        <CurrentValue>{this.state.value}</CurrentValue>

        <Controls
          onDecrement={this.handelDecrement}
          onIncrement={this.handelIncrement}
        />
      </CounterWrapper>
    );
  }
}

console.dir(Counter);
