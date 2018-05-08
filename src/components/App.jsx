import React from 'react';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

import Home from './Home';
import About from './About';

const App = props => {
	return <Router>
		<div>
			<Navbar fixed="top" color="dark" dark>
				<Nav className="ml-auto">
					<NavItem><NavLink tag={Link} className="text-white" to="/">Home</NavLink></NavItem>
					<NavItem><NavLink tag={Link} className="text-white" to="/about">About</NavLink></NavItem>
				</Nav>
			</Navbar>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
			</Switch>
		</div>
	</Router>
}

export default App;