export class GithubApi {
  constructor(apiHost, owner, repo) {
    this._apiHost = apiHost;
    this._owner = owner;
    this._repo = repo;
  }

  async getCommits() {
    const url = `${this._apiHost}/repos/${this._owner}/${this._repo}/commits`;
    const res = await fetch(url);
    return res.json();
  }
}
