import axios from 'axios';
import {
  FULLFACE_BASE_API,
  FULLFACE_API_PROJECT_NAME,
} from '@env';
import AuthApi from './auth';

export default {
  getUsers: async () => {
    try {
      const body = {
        accessToken: await AuthApi.getUserAccessToken(),
        projectName: FULLFACE_API_PROJECT_NAME,
      };

      const { data } = await axios.post(`${FULLFACE_BASE_API}/lstapi/users/list`, body);

      return data;
    } catch (error) {
      return { error };
    }
  },
};
