import axios from 'axios';
import {
  FULLFACE_BASE_API,
  FULLFACE_API_SCOPE,
  FULLFACE_API_GRANT_TYPE,
  FULLFACE_API_PROJECT_NAME,
} from '@env';
import AuthLocalStorage from '../local-storage/auth';

const getUserAccessToken = async () => {
  const localToken = await AuthLocalStorage.get();

  if (localToken && !localToken.error)
    return localToken;
};

const storeUserAccessToken = async (user, password) => {
  try {
    let body = new FormData();

    body.append('scope', FULLFACE_API_SCOPE);
    body.append('grant_type', FULLFACE_API_GRANT_TYPE);
    body.append('username', user);
    body.append('password', password);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    };

    const response = await axios.post(`${FULLFACE_BASE_API}/tokapi/token`, body, config);

    if (response && response.access_token) {
      AuthLocalStorage.set(response.access_token);
    }

    return true;
  } catch (error) {
    return { error };
  }
};

const removeUserAccessToken = async () => {
  try {
    const result = await AuthLocalStorage.delete();

    if (result && !result.error)
      return false;

    return true;
  } catch (error) {
    return false;
  }
};

const isTokenValid = async () => {
  const localToken = await AuthLocalStorage.get();

  if (!localToken || localToken.error)
    return false;

  try {
    const body = {
      accessToken: localToken,
      projectName: FULLFACE_API_PROJECT_NAME,
    };

    await axios.post(`${FULLFACE_BASE_API}/lstapi/users/list`, body);

    return true;
  } catch (error) {
    return false;
  }
};

export default {
  getUserAccessToken,
  storeUserAccessToken,
  removeUserAccessToken,
  isTokenValid,
};
