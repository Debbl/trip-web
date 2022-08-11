const PROD_URL = "http://123.207.32.32:1888/api";
// const DEV_URL = "http://localhost:5173/api/";
const DEV_URL = "/api";

const BASE_URL = import.meta.env.MODE === "development" ? DEV_URL : PROD_URL;
const TIMEOUT = 2000;

export { BASE_URL, TIMEOUT };
