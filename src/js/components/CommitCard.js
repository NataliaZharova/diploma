import { formatDate } from "../utils/format/format-date";

export class CommitCard {
  constructor(commit) {
    const {
      commit: {
        committer: { name, email, date },
        message
      },
      author: { avatar_url },
      html_url
    } = commit;

    const tpl = document.getElementById("commit-card");

    this._el = tpl.content.cloneNode(true);
    this._cardEl = this._el.querySelector(".commit-card");
    this._dateEl = this._el.querySelector(".commit-card__date");
    this._profilePicEl = this._el.querySelector(".commit-card__profile-pic");
    this._profileNameEl = this._el.querySelector(".commit-card__profile-name");
    this._profileEmailEl = this._el.querySelector(
      ".commit-card__profile-email"
    );
    this._messageEl = this._el.querySelector(".commit-card__message");

    this._cardEl.href = html_url;
    this._dateEl.textContent = formatDate(new Date(date));
    this._profilePicEl.src = avatar_url;
    this._profileNameEl.textContent = name;
    this._profileEmailEl.textContent = email;
    this._messageEl.textContent = message;
  }

  getElement() {
    return this._el;
  }
}
