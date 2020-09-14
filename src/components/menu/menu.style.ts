import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	background: #238b95;

	display: flex;
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
