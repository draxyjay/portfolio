import anime from 'animejs';
import { RefObject } from 'react';

export const slideInMenu = (navigator: React.RefObject<HTMLElement>) =>
	anime({
		targets: navigator.current,
		easing: 'easeOutQuad',
		opacity: [0, 1],
		translateX: [-50, 0],
		duration: 1000,
		delay: 7000,
	});

type BurgerAnimationProps = {
	burgerRectRef: RefObject<HTMLDivElement>;
	burgerRectRef1: RefObject<HTMLDivElement>;
	burgerRectRef2: RefObject<HTMLDivElement>;
	burgerRectRef3: RefObject<HTMLDivElement>;
};

export const burgerToCross = ({
	burgerRectRef,
	burgerRectRef1,
	burgerRectRef2,
	burgerRectRef3,
}: BurgerAnimationProps) => {
	const tl = anime
		.timeline({
			easing: 'easeOutQuad',
			duration: 500,
		})
		.add({
			targets: burgerRectRef.current?.childNodes,
			translateY: (el: any, i: any) => (i < 2 ? 18 / (i + 1) : 0),
		})
		.add(
			{
				targets: burgerRectRef1.current,
				opacity: 0,
			},
			300
		)
		.add(
			{
				targets: [burgerRectRef2.current, burgerRectRef3.current],
				rotate: (el: any, i: any) => (i === 0 ? 45 : -45),
				translateY: (el: any, i: any) => (i === 0 ? 0 : -9),
				duration: 500,
				delay: 0,
			},
			500
		)
		.add({
			targets: [burgerRectRef2.current, burgerRectRef3.current],
			backgroundColor: '#f7f7df',
		});

	if (tl.began || !tl.completed) return false;
	tl.play();
};

export const crossToBurger = ({
	burgerRectRef,
	burgerRectRef1,
	burgerRectRef2,
	burgerRectRef3,
}: BurgerAnimationProps) => {
	const tl = anime
		.timeline({
			easing: 'easeOutQuad',
		})
		.add(
			{
				targets: [burgerRectRef2.current, burgerRectRef3.current],
				backgroundColor: '#238b95',
			},
			0
		)
		.add(
			{
				targets: [burgerRectRef2.current, burgerRectRef3.current],
				rotate: 0,
				translateY: (el: any, i: any) => (i === 0 ? 9 : 0),
				duration: 500,
			},
			0
		)
		.add(
			{
				targets: burgerRectRef1.current,
				opacity: 1,
			},
			300
		)
		.add(
			{
				targets: burgerRectRef.current?.childNodes,
				translateY: 0,
				duration: 500,
			},
			750
		);

	tl.play();
};
