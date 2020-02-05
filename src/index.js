import { Api } from "./api";

import "normalize.css";
import "./pages/index.css";

const GROUP_ID = "cohort3";
const TOKEN = "361584ad-ce3b-45ac-9ca2-820a2f350a53";

const serverUrl =
  process.env.NODE_ENV === "development"
    ? "http://praktikum.tk/" + GROUP_ID
    : "https://praktikum.tk/" + GROUP_ID;

const root = document.querySelector(".root");

const api = new Api(TOKEN, serverUrl);
