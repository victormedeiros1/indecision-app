class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  componentDidMount() {
    try {
      const count = Number(localStorage.getItem('count'));
      if (count) this.setState(() => ({ count }));

      console.log(count);
    } catch (e) {
      // Nothing
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log('addOne');
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log('minusOne');
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log('reset');
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={addOne}>+1</button>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderCounterApp();
