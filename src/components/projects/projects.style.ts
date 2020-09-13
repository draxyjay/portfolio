import styled from 'styled-components';

export const ProjectsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: fit-content;
	margin: 0 auto;
`;

export const Project = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: 300px;
	width: 300px;
	margin: 10px;
	padding: 10px;

	background-color: #011627;
	border-radius: 2px;
	color: #f7f7df;
	letter-spacing: 0.1em;
`;

export const ProjectDate = styled.div`
	font-size: 18px;
	text-align: right;
`;

export const ProjectName = styled.div`
	height: 120px;
	font-size: 36px;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 0.1em;

	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ProjectDescription = styled.div`
	display: block;
	font-size: 12px;
`;

export const ProjectTopics = styled.div`
	display: flex;
	font-size: 10px;
	text-transform: uppercase;
`;

export const ProjectTopic = styled.div`
	margin-right: 5px;
`;

export const ProjectGitLink = styled.a`
	margin-left: auto;
	text-decoration: none;
	color: inherit;
`;
