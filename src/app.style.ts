import styled from 'styled-components';
import { device } from './utils/deviceUtils';

export const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100%;
	flex: 1;

	display: flex;

	& > div:nth-child(2) {
		@media ${device.tablet} {
			flex: 1;
		}
	}

	@media ${device.tablet} {
		flex-direction: column;
	}
`;
