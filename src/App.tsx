import './style/App.scss';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Main from './components/main';
import React from 'react';
import Splash from './components/Splash';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/splash' render={(routeProps: any) => <Splash {...routeProps} />}/>
					<Route path='/' render={(routeProps: any) => <Main {...routeProps} />}/>
				</Switch>
			</Router>
		);
	}
}

export default App;
