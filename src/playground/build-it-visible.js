class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show details'}
        </button>
        <p>{this.state.visibility && 'Here are the details!'}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let isShowing = false;

// const toggleDetails = () => {
//   isShowing = !isShowing;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>
//         {isShowing ? 'Hide details' : 'Show details'}
//       </button>
//       {isShowing && <p>Here are the details!</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// };

// render();
