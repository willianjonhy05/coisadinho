import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NomeButton from '../components/CardUser';
import { MaterialIcons } from '@expo/vector-icons';

const UsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      navigation.navigate('Login');
      return;
    }
    try {
      const response = await fetch('https://reqres.in/api/users?page=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data.data);
      } else {
        console.log('Erro ao carregar usuários');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };

  const goToUserDetails = (userId) => {
    navigation.navigate('UserDetailsScreen', { userId });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NomeButton
            nome={`${item.first_name} ${item.last_name}`}
            onPress={() => goToUserDetails(item.id)}
          />
        )}
      />

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={28} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default UsersScreen;
