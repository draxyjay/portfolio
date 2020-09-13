import styled from 'styled-components';

export const PDFContainer = styled.div`
	margin: 0 auto;
`;

export const DownloadButtonContainer = styled.div`
	width: 100%;
	border: none;
	background-color: #238b95;
	text-align: center;
	border-radius: 2px;

	&:hover {
		background-color: #011627;
	}
`;

export const DownloadButton = styled.a`
	cursor: pointer;

	display: block;
	width: 100%;
	height: 41px;
	border: none;
	background-color: #238b95;
	border-radius: 2px;
	padding: 10px 0;

	font-size: 16px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
	text-decoration: none;
	text-align: center;

	&:hover {
		background-color: #011627;
	}
`;
