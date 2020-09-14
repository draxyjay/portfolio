import React from 'react';
import { useRouteMatch } from 'react-router';
import { MenuLinkContainer, MenuLinkStyle } from './menu.style';

type MenuLinkProps = {
	label: string;
	to: string;
	activeOnlyWhenExact?: boolean;
	toggleMenu: () => void;
};

const MenuLink = ({
	label,
	to,
	activeOnlyWhenExact,
	toggleMenu,
}: MenuLinkProps) => {
	const match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact,
	});

	return (
		<MenuLinkContainer active={match !== null}>
			<MenuLinkStyle onClick={toggleMenu} to={to}>
				{label}
			</MenuLinkStyle>
		</MenuLinkContainer>
	);
};

export default MenuLink;
