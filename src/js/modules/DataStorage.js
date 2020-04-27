import { LocalStorage } from "./LocalStorage";

export class DataStorage extends LocalStorage {
  constructor(queryKey, newsKey) {
    super();
    this._queryKey = queryKey;
    this._newsKey = newsKey;
  }

  saveNews(news) {
    this._write(this._newsKey, news);
  }

  saveQuery(query) {
    this._write(this._queryKey, query);
  }

  getNews() {
    return this._read(this._newsKey);
  }

  getQuery() {
    return this._read(this._queryKey);
  }
}
