import anime from 'animejs';
import { RefObject } from 'react';

export const showMenu = (container: RefObject<HTMLDivElement>) => {
	const tl = anime({
		targets: container.current,
		translateY: [-window.innerHeight, 0],
		opacity: [0, 1],
		easing: 'spring(1, 80, 10, 0)',
		duration: 2000,
		delay: 750,
	});

	if (tl.began || !tl.completed) return false;
	tl.play();
};

export const hideMenu = (
	container: RefObject<HTMLDivElement>
): Promise<void> => {
	const tl = anime
		.timeline({
			easing: 'easeOutQuad',
		})
		.add({
			targets: container.current,
			translateY: [0, -window.innerHeight],
			duration: 1000,
		})
		.add({
			targets: container.current,
			opacity: [1, 0],
		});

	tl.play();
	return tl.finished;
};
