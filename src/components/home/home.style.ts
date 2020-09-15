import styled from 'styled-components';

export const HomeContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-items: center;
	align-items: center;
`;

export const Name = styled.div`
	font-size: 24px;
	color: #238b95;
	letter-spacing: 2.4px;
	white-space: nowrap;
	overflow: hidden;
	text-transform: uppercase;
`;

export const Description = styled.div`
	max-width: 400px;
	margin-top: 20px;

	font-size: 16px;
	text-align: justify;
	letter-spacing: 1px;
`;
