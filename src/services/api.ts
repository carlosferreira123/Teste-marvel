import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = '8a3cc353c8c84ff163249bb0d35e3006';
const PRIVATE_KEY = 'e91bb640948894740bda49d13261a95cf41e33e7';



const ts = Number(new Date());


const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/comics',
    params: {
        ts,
        apikey: PUBLIC_KEY,
        hash,
    },
})




export default api;




