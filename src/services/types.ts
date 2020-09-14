export interface IGithubRepo {
	id: string;
	name: string;
	description: string;
	updated_at: string;
	fork: boolean;
	html_url: string;
	topics?: IGitHubTopics;
}

export interface IGitHubTopics {
	names: string[];
}
