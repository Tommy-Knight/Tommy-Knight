import './style/App.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/main';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path='/' element={<Main />} />
				</Routes>
			</Router>
		);
	}
}

export default App;
