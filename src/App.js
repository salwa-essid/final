import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const UserLogin = React.lazy(() => import('./views/Pages/Login/userLogin'));

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense fallback={loading()}>
					<Switch>
						<Route exact path="/user/login" name="Login User" render={props => <UserLogin {...props} />} />
						<Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />

						<Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
					</Switch>
				</React.Suspense>
			</HashRouter>
		);
	}
}

export default App;
