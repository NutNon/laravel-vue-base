import axios from "axios"
import { domain } from "../utils/Constants.util"

const http = new axios.create({
    baseURL: domain
});

const httpMethod = {
    get(url, options = null) {
        return http.get(url, options).then(res => res.data);
    },
    post(url, data = null, options = null) {
        return http.post(url, data, options).then(res => res.data);
    },
    put(url, data = null, options = null) {
        return http.put(url, data, options).then(res => res.data);
    },
    delete(url, options = null) {
        return http.delete(url, options).then(res => res.data);
    }
};

export default httpMethod;
