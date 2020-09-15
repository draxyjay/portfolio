import anime from 'animejs';

export const spinIt = (logoPath: React.RefObject<SVGSVGElement>) =>
	anime({
		targets: logoPath.current?.childNodes,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 500,
		delay: function (el, i) {
			return i * 200;
		},
		direction: 'alternate',
		loop: true,
	});
