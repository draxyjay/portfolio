import styled from 'styled-components';
import { device } from './utils/deviceUtils';

export const AppContainer = styled.div`
	width: 100%;
	height: 100%;

	background-color: #f7f7df;
	display: flex;

	@media ${device.tablet} {
		flex-direction: column;
	}
`;
