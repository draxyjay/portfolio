import React, { RefObject, useEffect, useRef, useState } from 'react';
import {
	Navigation,
	Hamburger,
	BurgerSlice,
	VerticalText,
	VerticalTextContainer,
} from './nav.style';
import { useLocation } from 'react-router-dom';
import { Links } from '../../app';
import { burgerToCross, crossToBurger, slideInMenu } from './nav.animation';
import Menu from '../menu';

const Nav = () => {
	const location = useLocation();

	const [showMenu, setShowMenu] = useState(false);

	const navigator = useRef<HTMLElement>(null);

	const burgerRectRef: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef1: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef2: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef3: RefObject<HTMLDivElement> = React.createRef();

	const refs = {
		burgerRectRef,
		burgerRectRef1,
		burgerRectRef2,
		burgerRectRef3,
	};

	useEffect(() => {
		if (location.pathname === '/') slideInMenu(navigator);
	}, []);

	const toggleMenu = () => {
		if (!showMenu) {
			setShowMenu(true);
			burgerToCross(refs);
		} else {
			crossToBurger(refs);
			setShowMenu(false);
		}
	};

	return (
		<>
			<Navigation ref={navigator}>
				<Hamburger onClick={toggleMenu} ref={burgerRectRef}>
					<BurgerSlice ref={burgerRectRef1} />
					<BurgerSlice ref={burgerRectRef2} />
					<BurgerSlice ref={burgerRectRef3} />
				</Hamburger>
				<VerticalTextContainer>
					<VerticalText>
						{
							Links.find(
								(link) => link.path === location.pathname
							)?.label
						}
					</VerticalText>
				</VerticalTextContainer>
			</Navigation>
			<Menu isShown={showMenu} toggleMenu={toggleMenu} />
		</>
	);
};

export default Nav;
