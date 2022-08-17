const PROD_URL = "https://trip-web-api.vercel.app/api";
// const DEV_URL = "http://localhost:5173/api/";
const DEV_URL = "/api";

const BASE_URL = import.meta.env.MODE === "development" ? DEV_URL : PROD_URL;
const TIMEOUT = 2000;

export { BASE_URL, TIMEOUT };
