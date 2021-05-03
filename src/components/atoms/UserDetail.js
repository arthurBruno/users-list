import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { colors, text } from './GlobalStyle';

const UserDetail = ({ data }) => {
  const renderKeys = (value) => {
    const formatted = {
      email: 'e-mail',
    };

    return formatted[value] ? formatted[value] : value;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.key}>{renderKeys(data.key)}</Text>
      <Text style={styles.value}>{data.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 5,
    borderTopColor: colors.midGrey,
    borderTopWidth: 1,
  },
  key: {
    color: colors.grey,
  },
  value: {
    ...text.light16,
  },
})

export default UserDetail;
