import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Vamos usar o babel para compilar este arquivo e cuspir o resultado em outro.
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
