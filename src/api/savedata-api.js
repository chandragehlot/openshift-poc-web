import axios from 'axios';

const url = 'http://openshift-poc-test-myproject.2886795325-80-simba02.environments.katacoda.com/quote';

export const saveNameToServer = (name) => {
    const data = {
        username : name
      }
      return axios.post(url, data, {mode : 'no-cors'});
}