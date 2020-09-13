import React from 'react';
import { useQuery, gql } from '@apollo/client';
import {
	ProjectsContainer,
	Project,
	ProjectDate,
	ProjectName,
	ProjectDescription,
	ProjectTopics,
	ProjectTopic,
	ProjectGitLink,
} from './projects.style';
import { GitHub } from 'react-feather';

interface GitHubReposityTopic {
	name: string;
}

interface GitHubReposityTopicNode {
	topic: GitHubReposityTopic;
}

interface GitHubReposityTopicEdge {
	node: GitHubReposityTopicNode;
}

interface GitHubReposityTopics {
	edges: GitHubReposityTopicEdge[];
}

interface GithubRepository {
	name: string;
	description: string;
	updatedAt: Date;
	url: string;
	repositoryTopics: GitHubReposityTopics;
}

interface GithubRepositoriesEdges {
	node: GithubRepository;
}

interface GithubRepositories {
	edges: GithubRepositoriesEdges[];
}

interface GitHubUser {
	repositories: GithubRepositories;
}

interface GithubRepositoriesQuery {
	user: GitHubUser;
}

const GET_GITHUB_REPOSITORIES = gql`
	query GetGithubRepositories {
		user(login: "draxyjay") {
			repositories(first: 10, isFork: false) {
				edges {
					node {
						name
						description
						updatedAt
						url
						repositoryTopics(first: 5) {
							edges {
								node {
									topic {
										name
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

const Projects = () => {
	const { data } = useQuery<GithubRepositoriesQuery, any>(
		GET_GITHUB_REPOSITORIES
	);
	console.log(data);

	return (
		<ProjectsContainer>
			{data?.user.repositories.edges.map((edge) => (
				<Project>
					<ProjectDate>
						{new Date(edge.node.updatedAt).getFullYear()}
					</ProjectDate>
					<ProjectName>{edge.node.name}</ProjectName>
					<ProjectDescription>
						{edge.node.description}
					</ProjectDescription>
					<ProjectTopics>
						{edge.node.repositoryTopics.edges.map((topic) => (
							<ProjectTopic>{topic.node.topic.name}</ProjectTopic>
						))}
						<ProjectGitLink target='_blank' href={edge.node.url}>
							<GitHub size={16} />
						</ProjectGitLink>
					</ProjectTopics>
				</Project>
			))}
		</ProjectsContainer>
	);
};

export default Projects;
