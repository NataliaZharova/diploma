import {
  NEWS_API_HOST,
  NEWS_API_KEY,
  NEWS_DAYS_COUNT,
  NEWS_ARTICLES_LIMIT
} from "./js/constants/news.js";
import { NEWS_STORAGE_KEY, QUERY_STORAGE_KEY } from "./js/constants/storage.js";
import { DataStorage } from "./js/modules/DataStorage";
import { NewsApi } from "./js/modules/NewsApi";
import { SearchInput } from "./js/components/SearchInput";
import { NewsCardList } from "./js/components/NewsCardList";
import { NewsCard } from "./js/components/NewsCard";

import "normalize.css";
import "./pages/index.css";

const dataStorage = new DataStorage(QUERY_STORAGE_KEY, NEWS_STORAGE_KEY);

const newsApi = new NewsApi(
  NEWS_API_HOST,
  NEWS_DAYS_COUNT,
  NEWS_ARTICLES_LIMIT,
  NEWS_API_KEY
);

const newsCardList = new NewsCardList();

const searchInput = new SearchInput([
  async query => {
    try {
      newsCardList.startLoading();
      const news = await newsApi.getNews(query);
      const cards = news.articles.map(o => new NewsCard(o));
      dataStorage.saveQuery(query);
      dataStorage.saveNews(news);
      newsCardList.populate(cards);
    } catch (err) {
      newsCardList.showFailure();
      throw err;
    }
  }
]);
