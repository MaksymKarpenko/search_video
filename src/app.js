const css = require('./style/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDyCA0mpRHFiZ5uvYpJDFHekuxkTqQrOZE';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.root'));