import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Links } from '../../app';
import { hideMenu, showMenu } from './menu.animation';
import { MenuContainer } from './menu.style';
import MenuLink from './menulink';

const menuEl = document.getElementById('menu') as HTMLElement;

type MenuProps = {
	isShown: boolean;
	toggleMenu: () => void;
};

const Menu = ({ isShown, toggleMenu }: MenuProps) => {
	const container = useRef<HTMLDivElement>(null);

	const [portalize, setPortalize] = useState(false);

	useEffect(() => {
		// Animation
		if (isShown) {
			setPortalize(true);
			showMenu(container);
		} else {
			hideMenu(container).then(() => setPortalize(false));
		}
	}, [isShown, portalize]);

	return portalize
		? createPortal(
				<MenuContainer ref={container}>
					{Links.map((link, i) => (
						<MenuLink
							key={`Link-${link.path}`}
							label={link.label}
							to={link.path}
							activeOnlyWhenExact={i === 0}
							toggleMenu={toggleMenu}
						/>
					))}
				</MenuContainer>,
				menuEl
		  )
		: null;
};

export default Menu;
