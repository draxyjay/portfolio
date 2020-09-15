import styled from 'styled-components';

export const ContactContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 200px;
	justify-content: center;
	margin: 0 auto;
`;

export const ContactMail = styled.a`
	width: 200px;

	display: inline-flex;
	justify-content: center;
	justify-content: space-between;

	font-size: 18px;
	letter-spacing: 0.1em;
	text-decoration: none;
	color: #000;

	& > svg {
		color: #238b95;
	}
`;

export const ContactSocialMedias = styled.div`
	display: inline-flex;
	justify-content: center;
	margin-top: 10px;
`;

export const ContactSocialMedia = styled.a`
	color: #238b95;
	margin: 0 10px;
`;
