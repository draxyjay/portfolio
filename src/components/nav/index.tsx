import React, { RefObject, useEffect, useState } from 'react';
import {
	Navigation,
	Hamburger,
	BurgerSlice,
	VerticalText,
	VerticalTextContainer,
} from './menu.style';
import Menu from './menu';
import { MenuAnimation } from './menu.animation';
import { useLocation } from 'react-router-dom';
import { Links } from '../../app';

const Nav = () => {
	const location = useLocation();

	const [showMenu, setShowMenu] = useState(false);

	const navRef: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef1: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef2: RefObject<HTMLDivElement> = React.createRef(),
		burgerRectRef3: RefObject<HTMLDivElement> = React.createRef(),
		menuRef: RefObject<HTMLDivElement> = React.createRef();

	const refs = {
		burgerRectRef,
		burgerRectRef1,
		burgerRectRef2,
		burgerRectRef3,
		menuRef,
	};

	useEffect(() => {
		if (location.pathname === '/') MenuAnimation.showMenu(navRef);
	}, []);

	const toggleMenu = () => {
		if (!showMenu) {
			setShowMenu(true);
			MenuAnimation.openMenu(refs);
		} else {
			MenuAnimation.closeMenu(refs).then(() => {
				setShowMenu(false);
			});
		}
	};

	return (
		<>
			<Navigation ref={navRef}>
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
			<Menu show={showMenu} ref={menuRef} toggleMenu={toggleMenu} />
		</>
	);
};

export default Nav;
