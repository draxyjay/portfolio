import React, { useEffect, useRef, useState } from 'react';
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
import GithubService from '../../services/githubService';
import { IGithubRepo } from '../../services/types';
import { showProjects } from './projects.animation';

type ProjectsProps = {
	githubService: GithubService;
};

const Projects = ({ githubService }: ProjectsProps) => {
	const [repos, setRepos] = useState<IGithubRepo[]>([]);

	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		fetchRepos().then(() => showProjects(container));
	}, []);

	const fetchRepos = async () => {
		const newRepos = await githubService.getReposWithTopics();
		setRepos(newRepos);
	};

	return (
		<ProjectsContainer ref={container}>
			{repos.map((repo) => (
				<Project key={`${repo.name}-${repo.updated_at}`}>
					<ProjectDate>
						{new Date(repo.updated_at).getFullYear()}
					</ProjectDate>
					<ProjectName>{repo.name}</ProjectName>
					<ProjectDescription>{repo.description}</ProjectDescription>
					<ProjectTopics>
						{repo.topics?.names.map((topic) => (
							<ProjectTopic key={topic}>{topic}</ProjectTopic>
						))}
						<ProjectGitLink target='_blank' href={repo.html_url}>
							<GitHub size={16} />
						</ProjectGitLink>
					</ProjectTopics>
				</Project>
			))}
		</ProjectsContainer>
	);
};

Projects.defaultProps = {
	githubService: new GithubService(),
};

export default Projects;
