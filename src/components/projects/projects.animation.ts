import anime from 'animejs';
import { RefObject } from 'react';

export const showProjects = (container: RefObject<HTMLDivElement>) =>
	anime({
		targets: container.current?.childNodes,
		easing: 'easeOutQuad',
		translateY: [-500, 0],
		opacity: [0, 1],
		delay: (el: any, i: number) => i * 250,
	});
