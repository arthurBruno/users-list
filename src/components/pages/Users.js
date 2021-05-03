import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import UsersApi from '../../api/users';
import { margins } from '../atoms/GlobalStyle';
import UserItem from '../molecules/UserItem';

const Users = ({ verifyAuthentication }) => {
  const [allUsers, setAllUsers] = useState([]);

  const handleGetUsers = async () => {
    const usersList = await UsersApi.getUsers();

    if (usersList && !usersList.error) {
      setAllUsers(usersList);
    } else {
      verifyAuthentication();
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <View style={styles.root}>
      {allUsers.map(user => <UserItem user={user} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    ...margins.content
  },
});

export default Users;
