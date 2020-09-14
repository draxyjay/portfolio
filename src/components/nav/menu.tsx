import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Links } from '../../app';
import { MenuContainer, MenuLinkContainer, MenuLinkStyle } from './menu.style';

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

type MenuProps = {
	show: boolean;
	toggleMenu: () => void;
};
const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
	({ show, toggleMenu }, ref) => {
		return (
			<MenuContainer show={show} ref={ref}>
				{Links.map((link, i) => (
					<MenuLink
						key={`Link-${link.path}`}
						label={link.label}
						to={link.path}
						activeOnlyWhenExact={i === 0}
						toggleMenu={toggleMenu}
					/>
				))}
			</MenuContainer>
		);
	}
);

export default Menu;
