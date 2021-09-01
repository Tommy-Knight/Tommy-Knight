import "./style/App.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./components/Home";
import React from "react";
import Search from "./components/weather/Search";
import Splash from "./components/Splash";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/weather' render={(routeProps: any) => <Search {...routeProps} />} />
					<Route path='/home' render={(routeProps: any) => <Home {...routeProps} />} />

					<Route path='/' render={(routeProps: any) => <Splash {...routeProps} />} />
				</Switch>
			</Router>
		);
	}
}

export default App;
