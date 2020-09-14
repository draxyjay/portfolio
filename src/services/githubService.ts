import { request } from '@octokit/request';
import { IGithubRepo, IGitHubTopics } from './types';

export default class GithubService {
	getRepos = async () => {
		const repos = await request('GET /users/{user}/repos', {
			user: 'draxyjay',
			type: 'owner',
			sort: 'updated',
		}).then((res) => res.data as IGithubRepo[]);

		// Filter out forked repo
		return repos.filter((repo) => !repo.fork);
	};

	getTopicsPerRepo = async (repo: string) => {
		return await request('GET /repos/{owner}/{repo}/topics', {
			owner: 'draxyjay',
			repo: repo,
			mediaType: {
				previews: ['mercy'],
			},
		}).then((res) => res.data as IGitHubTopics);
	};

	getReposWithTopics = async () => {
		const repos = await this.getRepos();

		for (let repo of repos) {
			repo.topics = await this.getTopicsPerRepo(repo.name);
		}

		return repos;
	};
}
