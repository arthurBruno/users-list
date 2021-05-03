import React, { Fragment, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthApi from './api/auth';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Users from './components/pages/Users';

const Stack = createStackNavigator();

const Routes = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    handleVerifyAuthentication();
  }, []);

  const handleVerifyAuthentication = async () => {
    const isTokenValid = await AuthApi.isTokenValid();

    if (isTokenValid) {
      setIsUserAuthenticated(true);
    } else {
      setIsUserAuthenticated(false);
    }
  };

  const handleLogin = async (user, password) => {
    const accessToken = await AuthApi.storeUserAccessToken(user, password);

    if (accessToken && !accessToken.error) {
      setIsUserAuthenticated(true);
    }
  };

  const handleLogout = async () => {
    const isRemoved = await AuthApi.removeUserAccessToken();

    if (isRemoved) {
      setIsUserAuthenticated(false);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isUserAuthenticated ? (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {(props) => <Login handleLogin={handleLogin} {...props} />}
          </Stack.Screen>
        ) : (
          <Fragment>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
            >
              {(props) => <Home handleLogout={handleLogout} {...props} />}
            </Stack.Screen>

            <Stack.Screen
              name="Users"
              options={{
                title: 'Todos os Usuários',
                headerTitleAlign: 'center',
              }}
            >
              {(props) => <Users verifyAuthentication={handleVerifyAuthentication} {...props} />}
            </Stack.Screen>
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
