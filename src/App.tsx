import "./style/App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import Splash from "./components/Splash";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' render={(routeProps: any) => <Splash {...routeProps} />} />
				</Switch>
			</Router>
		);
	}
}

export default App;
