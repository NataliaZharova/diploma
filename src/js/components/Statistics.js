import { countSubstrings } from "../utils/string/count-substrings";
import { cloneDate } from "../utils/date/clone-date";
import { sameDay } from "../utils/date/same-day";
import { addAllItems } from "../utils/array/add-all-items";
import { times } from "../utils/array/times";
import { zip3 } from "../utils/array/zip3";
import { formatDay } from "../utils/format/format-day";
import { formatMonth } from "../utils/format/format-month";
import { max } from "../utils/array/max";
import { uniq } from "../utils/array/uniq";

export class Statistics {
  constructor(daysCount, query, news) {
    this._el = document.querySelector(".statistics");
    this._queryEl = this._el.querySelector(".statistics__query");
    this._newsCountEl = this._el.querySelector(".statistics__news-count");
    this._mentionsInTitlesEl = this._el.querySelector(
      ".statistics__mentions-in-titles"
    );
    this._mentionsChartEl = this._el.querySelector(
      ".statistics__mentions-chart"
    );
    this._monthsEl = this._el.querySelector(".statistics__months");
    this._chartRowEl = document.getElementById("chart-row");

    this._daysCount = daysCount;
    this._query = query;
    this._news = news;

    this._queryWords = query.split(/\s+/u);
    this._mentionsInTitles = this._calcMentionsInTitles();
    const dates = this._genDates();
    const mentionCounts = this._genMentionCounts(dates);
    const mentionRatios = this._genMentionRatios(mentionCounts);
    this._months = uniq(dates.map(d => d.getMonth()));
    this._mentionsByDate = zip3(dates, mentionCounts, mentionRatios);

    this._populateText();
    this._populateChart();
  }

  _countMentions(words, text) {
    const wordsMentions = words.map(s => countSubstrings(s, text));
    return addAllItems(wordsMentions);
  }

  _calcMentionsInTitles() {
    const joinedTitles = this._news.articles.map(o => o.title).join(" ");
    return this._countMentions(this._queryWords, joinedTitles);
  }

  _genDates() {
    const now = new Date();
    const dates = times(this._daysCount, i => {
      const _now = cloneDate(now);
      _now.setDate(now.getDate() - i);
      return _now;
    });
    return dates.reverse();
  }

  _genMentionCounts(dates) {
    return dates.map(date => {
      return this._news.articles
        .filter(o => sameDay(date, new Date(o.publishedAt)))
        .reduce(
          (acc, { title, description }) =>
            acc +
            this._countMentions(this._queryWords, title + " " + description),
          0
        );
    });
  }

  _genMentionRatios(mentionCounts) {
    const maxMentions = max(mentionCounts);
    return mentionCounts.map(n => (100 * n) / maxMentions);
  }

  _populateText() {
    this._queryEl.textContent = this._query;
    this._newsCountEl.textContent = this._news.totalResults;
    this._mentionsInTitlesEl.textContent = this._mentionsInTitles;
    this._monthsEl.textContent = this._months.map(formatMonth).join(", ");
  }

  _populateChart() {
    const rows = this._mentionsByDate.map(rowModel => {
      const [date, mentionCount, mentionRatio] = rowModel;
      const el = this._chartRowEl.content.cloneNode(true);
      const dayEl = el.querySelector(".table__day");
      const barEl = el.querySelector(".table__bar");
      dayEl.textContent = formatDay(date);
      barEl.style.width = mentionRatio + "%";
      barEl.textContent = mentionCount;
      return el;
    });
    this._mentionsChartEl.append(...rows);
  }
}
