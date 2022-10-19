import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "https://qr-ufo.com";

export default client;
