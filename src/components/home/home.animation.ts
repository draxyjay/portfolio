import anime from 'animejs';
import { RefObject } from 'react';

type HomeAnimationProps = {
	logoPathRef: RefObject<SVGGElement>;
	cuttedLogoPathRef: RefObject<SVGGElement>;
	logoSVGRef: RefObject<SVGSVGElement>;
	nameRef: RefObject<HTMLDivElement>;
	descriptionRef: RefObject<HTMLDivElement>;
};

const play = ({
	logoPathRef,
	cuttedLogoPathRef,
	logoSVGRef,
	nameRef,
	descriptionRef,
}: HomeAnimationProps) => {
	var tl = anime
		.timeline({
			easing: 'easeInOutSine',
		})
		.add({
			targets: logoPathRef.current?.childNodes,
			stroke: '#238b95',
			strokeDashoffset: [anime.setDashoffset, 0],
			duration: 2000,
		})
		.add({
			targets: logoPathRef.current,
			fill: '#238b95',
		})
		.add(
			{
				targets: logoPathRef.current?.childNodes,
				opacity: 0,
			},
			2000
		)
		.add(
			{
				targets: cuttedLogoPathRef.current?.childNodes,
				fill: '#238b95',
			},
			2000
		)
		.add(
			{
				targets: cuttedLogoPathRef.current?.childNodes,
				translateX: (el: any, i: number) => (i === 0 ? -5 : 5),
				translateY: (el: any, i: number) => (i === 0 ? -5 : 5),
			},
			3000
		)
		.add({
			targets: logoSVGRef.current,
			width: 58,
			height: 72,
		})
		.add({
			targets: nameRef.current?.childNodes,
			scale: [4, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: 'easeOutExpo',
			duration: 950,
			delay: (el: any, i: number) => 70 * i,
		})
		.add({
			targets: descriptionRef.current,
			height: [0, 100],
			opacity: [0, 1],
		});

	tl.play();
};

export const HomeAnimation = { play };
