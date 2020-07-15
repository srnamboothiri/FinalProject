import React from 'react';
import { ContactList } from './contactList';
import ContactForm from './contactForm';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ContactProvider from "./ContactProvider";
import UpdateContact from "./editContact";

export const App = () => {
	return (
		<ContactProvider>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/add">ADD CONTACT</Link>
							</li>
						</ul>
					</nav>
				</div>
				<Switch>
					<Route path="/add">
						<ContactForm></ContactForm>
					</Route>
					<Route
						exact
						path="/edit/:id,:name,:email,:phone"
						component={UpdateContact}
					/>
					<Route path="/">
						<ContactList></ContactList>
					</Route>
				</Switch>
			</Router>
		</ContactProvider>
	);
}