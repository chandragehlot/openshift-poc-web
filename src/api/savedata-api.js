import axios from 'axios';

const url = 'http://localhost:8085/quote';

export const saveNameToServer = (name) => {
    const data = {
        username : name
      }
      return axios.post(url, data, {mode : 'no-cors'});
}