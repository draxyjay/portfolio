import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
	width: 50px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-right: 20px;
`;

export const Hamburger = styled.div`
	cursor: pointer;

	height: 20px;
	width: 30px;

	margin-bottom: 20px;

	z-index: 10;
`;

export const BurgerSlice = styled.div`
	width: 100%;
	height: 5px;
	background: #238b95;

	&:not(:last-child) {
		margin-bottom: 4px;
	}
`;

export const VerticalTextContainer = styled.div`
	position: relative;
	height: 100%;
`;

export const VerticalText = styled.div`
	position: absolute;
	top: 50%;
	height: 10em;
	margin-top: -5em;

	width: 30px;
	height: 100%;

	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	text-align: center;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	overflow-wrap: break-word;
	color: transparent;

	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: #238b95;
`;

export const MenuContainer = styled.div<{ show: boolean }>`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	background: #238b95;

	display: ${(props) => (props.show ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;

	z-index: 2;
`;

export const MenuLinkContainer = styled.div<{ active: boolean }>`
	font-size: 13vh;
	text-transform: uppercase;

	color: ${(props) => (props.active ? '#011627' : 'transparent')};
	-webkit-text-stroke-width: 5px;
	-webkit-text-stroke-color: #011627;

	&:hover {
		color: #011627;
	}
`;

export const MenuLinkStyle = styled(Link)`
	text-decoration: none;
	color: inherit;
`;
