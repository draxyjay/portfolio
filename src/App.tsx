import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const Home = lazy(() => import('./components/home'));
const CurriculumVitae = lazy(() => import('./components/curriculumvitae'));
const Projects = lazy(() => import('./components/projects'));
const Contact = lazy(() => import('./components/contact'));

export const Links = [
	{ path: '/', label: 'Accueil', component: Home },
	{ path: '/cv', label: 'CV', component: CurriculumVitae },
	{ path: '/projects', label: 'Projets', component: Projects },
	{ path: '/contact', label: 'Contact', component: Contact },
];

const client = new ApolloClient({
	uri: 'https://api.github.com/graphql',
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer c171481c3d192ce1e9a8cc4087e59aa073c3c2a4`,
	},
});

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<Nav />
			<Suspense fallback={<div>Chargement...</div>}>
				<Switch>
					{Links.map((link, i) => (
						<Route
							key={link.path}
							exact={i === 0}
							path={link.path}
							component={link.component}
						/>
					))}
				</Switch>
			</Suspense>
		</Router>
	</ApolloProvider>
);
export default App;
