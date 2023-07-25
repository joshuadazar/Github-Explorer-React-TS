export interface Github {
  name?: string;
  login?: string;
  location?: string;
  avatar_url?: string;
  public_repos?: number;
  url?: string;
}

export interface GithubRepos {
  id?:number;
  name?:string
  description?: string;
  url?:string;
  git_url?:string;
  html_url?:string;
  size?: number;
  visibility?: string;
  watchers_count?:number;
}