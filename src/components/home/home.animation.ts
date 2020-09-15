import anime from 'animejs';
import { RefObject } from 'react';

type HomeAnimationProps = {
	initialLogoPath: RefObject<SVGGElement>;
	cuttedLogoPath: RefObject<SVGGElement>;
	logoSVG: RefObject<SVGSVGElement>;
	nameText: RefObject<HTMLDivElement>;
	descriptionText: RefObject<HTMLDivElement>;
};

export const animateLogo = ({
	initialLogoPath,
	cuttedLogoPath,
	logoSVG,
	nameText,
	descriptionText,
}: HomeAnimationProps) => {
	var tl = anime
		.timeline({
			easing: 'easeInOutSine',
		})
		.add({
			targets: initialLogoPath.current?.childNodes,
			left: -50,
			stroke: '#238b95',
			strokeDashoffset: [anime.setDashoffset, 0],
			duration: 2000,
		})
		.add({
			targets: initialLogoPath.current,
			fill: '#238b95',
		})
		.add(
			{
				targets: initialLogoPath.current?.childNodes,
				opacity: 0,
			},
			2000
		)
		.add(
			{
				targets: cuttedLogoPath.current?.childNodes,
				fill: '#238b95',
			},
			2000
		)
		.add(
			{
				targets: cuttedLogoPath.current?.childNodes,
				translateX: (el: any, i: number) => (i === 0 ? -5 : 5),
				translateY: (el: any, i: number) => (i === 0 ? -5 : 5),
			},
			3000
		)
		.add({
			targets: logoSVG.current,
			width: 58,
			height: 72,
		})
		.add({
			targets: nameText.current?.childNodes,
			scale: [4, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: 'easeOutExpo',
			duration: 950,
			delay: (el: any, i: number) => 70 * i,
		})
		.add({
			targets: descriptionText.current,
			height: [0, 100],
			opacity: [0, 1],
		});

	tl.play();
};
