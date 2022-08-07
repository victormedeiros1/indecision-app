// Vamos usar o babel para compilar este arquivo e cuspir o resultado em outro.
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) this.setState(() => ({ options }));
    } catch (error) {
      // Nothing
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handlePickOption() {
    const randNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNumber];
    alert(option);
  }

  handleDeleteOptions() {
    localStorage.clear();
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  render() {
    return (
      <div>
        <Header subtitle={'This is a subtitle'} />
        <Action
          handlePickOption={this.handlePickOption}
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePickOption}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button disabled={props.options >= 0} onClick={props.handleDeleteOptions}>
        Remove all
      </button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      <ol>
        {props.options.map((option) => (
          <Option
            key={option}
            text={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

const Option = (props) => (
  <li>
    {props.text}
    <button onClick={() => props.handleDeleteOption(props.text)}>Remove</button>
  </li>
);

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      error: undefined,
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));
    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
