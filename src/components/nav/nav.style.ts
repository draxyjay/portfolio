import styled from 'styled-components';
import { device } from '../../utils/deviceUtils';

export const Navigation = styled.nav`
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin-right: 20px;

	width: 50px;

	@media ${device.tablet} {
		width: 100%;
		height: 60px;
	}
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

	@media ${device.tablet} {
		display: none;
	}
`;

export const VerticalText = styled.div`
	position: absolute;
	top: 50%;
	height: 10em;
	margin-top: -5em;
	width: 30px;

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
