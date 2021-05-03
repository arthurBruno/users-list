import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { FULLFACE_TEST_USER, FULLFACE_TEST_PASSWORD } from '@env';
import { margins, text } from '../atoms/GlobalStyle';

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleTestClick = () => {
    setUser(FULLFACE_TEST_USER);
    setPassword(FULLFACE_TEST_PASSWORD);
  };

  return (
    <Fragment>
      <View style={styles.root}>
        <Text style={styles.title}>Acessar</Text>

        <SafeAreaView style={styles.inputs}>
          <TextInput
            placeholder="Usuário"
            onChangeText={(value) => setUser(value)}
            value={user}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            onChangeText={(value) => setPassword(value)}
            value={password}
            keyboardType="password"
            style={styles.input}
          />
        </SafeAreaView>

        <Button
          title="Entrar"
          onPress={() => handleLogin(user, password)}
        />

        <View style={styles.testButton}>
          <Button
            title="Usar dados de teste"
            onPress={() => handleTestClick()}
            disabled={user === FULLFACE_TEST_USER && password === FULLFACE_TEST_PASSWORD}
          />
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    ...margins.content,
  },
  title: {
    ...text.light18,
  },
  testButton: {
    position: 'absolute',
    top: 20,
    right: 15
  },
  inputs: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    marginTop: 10
  },
});

export default Login;
