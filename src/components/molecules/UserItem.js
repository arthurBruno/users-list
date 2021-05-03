import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import UserDetail from '../atoms/UserDetail';
import { colors, text } from '../atoms/GlobalStyle';

const UserItem = ({ user }) => {
  const [open, setOpen] = useState(false);

  const renderBirthYear = (value) => value.toString().slice(0,4);

  const genders = {
    'M': 'Masculino',
    'F': 'Feminino',
    'I': 'Indefinido',
  };

  return (
    <TouchableOpacity onPress={() => setOpen(!open)}>
      <View style={styles.card}>
        <Text style={styles.id}>ID: {user.id}</Text>

        <View style={styles.infos}>
          <View style={styles.birthYear}>
            <Text>Nascimento</Text>
            <Text style={styles.year}>{renderBirthYear(user.birthYear)}</Text>
          </View>

          <Text style={styles.name}>
            {user.keys.find(item => item.key === 'nome').value}
          </Text>

          <Text>Gênero: {genders[user.gender]}</Text>
        </View>

        {open && user.keys.map(item => item.key !== 'nome' && <UserDetail data={item} />)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  id: {
    color: colors.grey,
  },
  infos: {
    marginTop: 5,
    marginBottom: 10,
  },
  birthYear: {
    position: 'absolute',
    right: 10,
    textAlign: 'right'
  },
  year: { ...text.light18 },
  name: { ...text.light18 },
})

export default UserItem;
