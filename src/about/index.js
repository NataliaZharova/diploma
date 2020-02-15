import {
  GITHUB_API_HOST,
  GITHUB_OWNER,
  GITHUB_REPO,
  GITHUB_COMMITS_LIMIT
} from "../js/constants/github";
import { GithubApi } from "../js/modules/GithubApi";
import { CommitCard } from "../js/components/CommitCard";
import { CommitCardList } from "../js/components/CommitCardList";

import "normalize.css";
import "../pages/about.css";

const githubApi = new GithubApi(GITHUB_API_HOST, GITHUB_OWNER, GITHUB_REPO);

const commitCardList = new CommitCardList();

githubApi
  .getCommits()
  .then(commits => {
    const cards = commits
      .slice(0, GITHUB_COMMITS_LIMIT)
      .map(o => new CommitCard(o));
    commitCardList.populate(cards);
  })
  .catch(err => {
    alert(
      "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
    );
    throw err;
  });
