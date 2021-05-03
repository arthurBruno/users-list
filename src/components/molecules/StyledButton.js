import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { colors, text } from '../atoms/GlobalStyle';

const StyledButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.root}>
      <Image style={styles.icon} source={require('../../assets/icon-users.png')} />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    marginRight: 50,
    marginLeft: 50,
    marginTop: 60,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
    borderRadius: 25,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  text: {
    color: colors.primary,
    ...text.light18
  },
  icon: {
    width: 80,
    height: 80,
  }
})

export default StyledButton;
