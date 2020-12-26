import React from 'react';

interface CounterProps {
  message: string;
}

interface CounterState {
  count: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  }

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}

export default Counter;