import { DataStorage } from "../js/modules/DataStorage";
import {
  NEWS_STORAGE_KEY,
  QUERY_STORAGE_KEY
} from "../js/constants/storage.js";
import { NEWS_DAYS_COUNT } from "../js/constants/news";
import { Statistics } from "../js/components/Statistics";

import "normalize.css";
import "../pages/analytics.css";

const dataStorage = new DataStorage(QUERY_STORAGE_KEY, NEWS_STORAGE_KEY);
const query = dataStorage.getQuery();
const news = dataStorage.getNews();

if (query === null || news === null) {
  window.location.href = "..";
} else {
  new Statistics(NEWS_DAYS_COUNT, query, news);
}
