import axios from 'axios';

export const DEFAULT_HEADERS = {
  responseType: ''
};

class BaseRequest {
  static headers() {
    return { headers: DEFAULT_HEADERS };
  }

  static get(url, data) {
    return axios.get(url, data);
  }

  static post(url, data) {
    return axios.post(url, data);
  }

  static patch(url, data, response) {
    return axios.patch(url, data, response);
  }
}

export default BaseRequest;
