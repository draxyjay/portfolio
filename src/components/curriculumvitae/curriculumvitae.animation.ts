import anime from 'animejs';

export const expandCV = (
	container: React.RefObject<HTMLDivElement>,
	button: React.RefObject<HTMLAnchorElement>
) =>
	anime
		.timeline({
			targets: container.current,
			easing: 'easeOutQuad',
			opacity: [0, 1],
			translateY: [-window.innerHeight, 0],
			duration: 1000,
		})
		.add(
			{
				targets: button.current,
				opacity: [0, 1],
				translateY: [-100, 0],
				easing: 'spring(1, 80, 10, 0)',
			},
			1000
		);
