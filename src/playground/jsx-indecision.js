console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';

    render();
  }
};

const onRemoveAll = () => {
  app.options = [];

  render();
};

const onMakeDecision = () => {
  const randomN = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomN];

  alert(option);
};

const numbers = [1, 2, 3];

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <h2>
        {app.subtitle.length > 0 ? 'Here are your options' : 'No options'}
      </h2>

      <p>{app.options.length}</p>

      <button disabled={app.options.length === 0 && true} onClick={onRemoveAll}>
        Remove all
      </button>
      <button
        disabled={app.options.length <= 1 && true}
        onClick={onMakeDecision}
      >
        What should I do?
      </button>

      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>

      <form onSubmit={onFormSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="option" />
          <button>Add Option</button>
        </div>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
