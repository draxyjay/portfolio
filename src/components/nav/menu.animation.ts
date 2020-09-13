import anime from 'animejs';
import { RefObject } from 'react';

const showMenu = (navRef: React.RefObject<HTMLDivElement>) =>
	anime({
		targets: navRef.current,
		easing: 'easeOutQuad',
		opacity: [0, 1],
		duration: 1000,
		delay: 7000,
	});

type MenuAnimationProps = {
	burgerRectRef: RefObject<HTMLDivElement>;
	burgerRectRef1: RefObject<HTMLDivElement>;
	burgerRectRef2: RefObject<HTMLDivElement>;
	burgerRectRef3: RefObject<HTMLDivElement>;
	menuRef: RefObject<HTMLDivElement>;
};

const openMenu = ({
	burgerRectRef,
	burgerRectRef1,
	burgerRectRef2,
	burgerRectRef3,
	menuRef,
}: MenuAnimationProps) => {
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
		})
		.add(
			{
				targets: menuRef.current,
				translateY: [-window.innerHeight, 0],
				opacity: [0, 1],
				easing: 'spring(1, 80, 10, 0)',
				duration: 1000,
			},
			750
		);

	if (tl.began || !tl.completed) return false;
	tl.play();
};

const closeMenu = ({
	burgerRectRef,
	burgerRectRef1,
	burgerRectRef2,
	burgerRectRef3,
	menuRef,
}: MenuAnimationProps): Promise<void> => {
	const tl = anime
		.timeline({
			easing: 'easeOutQuad',
		})
		.add({
			targets: menuRef.current,
			translateY: [0, -window.innerHeight],
			duration: 1000,
		})
		.add({
			targets: menuRef.current,
			opacity: [1, 0],
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

	return tl.finished;
};

export const MenuAnimation = { showMenu, openMenu, closeMenu };
