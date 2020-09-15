import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import { AppContainer, RouterContainer } from './app.style';
import Footer from './components/footer';
import LogoSpinner from './components/logospinner';
import Nav from './components/nav';

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

const App = () => (
	<AppContainer>
		<RouterContainer>
			<Router>
				<Nav />
				<Suspense fallback={<LogoSpinner />}>
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
		</RouterContainer>
		<Footer />
	</AppContainer>
);

export default App;
