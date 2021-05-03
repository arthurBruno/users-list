import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { margins } from '../atoms/GlobalStyle';
import StyledButton from '../molecules/StyledButton';

const Home = ({ handleLogout, navigation }) => {
  return (
    <View style={styles.root}>
      <View style={styles.root}>
        <StyledButton
          onPress={() => navigation.navigate('Users')}
          text="Acessar usuários"
        />
      </View>

      <View style={styles.logoutButton}>
        <Button
          title="Logout"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { ...margins.content },
  logoutButton: {
    marginTop: 50,
  },
});

export default Home;
