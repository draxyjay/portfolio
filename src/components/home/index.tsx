import React, { useEffect, useRef } from 'react';
import { animateLogo } from './home.animation';
import { HomeContainer, Name, Description } from './home.style';

const Home = () => {
	const initialLogoPath = useRef<SVGGElement>(null),
		cuttedLogoPath = useRef<SVGGElement>(null),
		logoSVG = useRef<SVGSVGElement>(null),
		nameText = useRef<HTMLDivElement>(null),
		descriptionText = useRef<HTMLDivElement>(null);

	const refs = {
		initialLogoPath,
		cuttedLogoPath,
		logoSVG,
		nameText,
		descriptionText,
	};

	useEffect(() => {
		animateLogo(refs);
	});

	return (
		<HomeContainer>
			<svg width='290' height='358' viewBox='0 0 290 358' ref={logoSVG}>
				<g
					fill='none'
					fillRule='evenodd'
					stroke='currentColor'
					strokeWidth='1'
					ref={initialLogoPath}
				>
					<path d='M47.0924 225.016L46.6594 225.766H47.5254H201.191H202.059L201.623 225.015L108.85 65.1706L124.358 38.3103L247.85 252.205H0.866026L22.9953 213.876H53.5241L47.0924 225.016ZM108.571 0.684239L139.128 0.505069L124.005 27.0577L108.571 0.684239Z' />
					<path d='M154.642 346.95L31.1497 133.055L278.134 133.055L256.005 171.384H255.858L255.713 171.633L228.483 218.606L213.479 192.402L231.762 160.241L232.186 159.494H231.327L77.8091 159.494H76.9408L77.3766 160.245L170.15 320.089L154.642 346.95Z' />
				</g>
				<g
					fill='none'
					fillRule='evenodd'
					stroke='currentColor'
					strokeWidth='0'
					ref={cuttedLogoPath}
				>
					<path
						d='M53.5241 213.876L47.0924 225.016L46.6594 225.766H47.5254H201.191H202.059L201.623 225.015L163.599 159.5H194.327L247.85 252.205H0.866026L22.9952 213.876H53.5241ZM108.571 0.684239L139.128 0.505069L124.005 27.0577L108.571 0.684239ZM124.358 38.3103L178.739 132.5H147.928L108.85 65.1706L124.358 38.3103Z'
						stroke='black'
					/>
					<path
						d='M231.762 160.241L232.186 159.494H231.327L77.8091 159.494H76.9408L77.3766 160.245L115.25 225.5H84.5229L31.1497 133.055L278.134 133.055L256.005 171.384H255.858L255.713 171.633L228.483 218.606L213.479 192.402L231.762 160.241ZM170.15 320.089L154.642 346.95L100.111 252.5H130.921L170.15 320.089Z'
						stroke='black'
					/>
				</g>
			</svg>

			<Name ref={nameText}>
				{'Jay Patel'.split('').map((letter, index) => (
					<span key={letter + index}>{letter}</span>
				))}
			</Name>
			<Description ref={descriptionText}>
				<div>Bonjour, je suis un développeur full stack à Paris.</div>
				<div>
					Diplômé d'une école d'ingénierie de Montréal au Canada, je
					suis présent pour répondre à vos besoins technologiques.
				</div>
			</Description>
		</HomeContainer>
	);
};

export default Home;
