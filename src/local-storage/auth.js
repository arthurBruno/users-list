import AsyncStorage from '@react-native-community/async-storage';

export default {
  set: async (value) => {
    try {
      await AsyncStorage.setItem('accessToken', value);
    } catch (error) {
      return { error };
    }
  },

  get: async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');

      return token != null ? token : null;
    } catch(error) {
      return { error };
    }
  },

  delete: async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
    } catch(error) {
      return error
    }
  }
};