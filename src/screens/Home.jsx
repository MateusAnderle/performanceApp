import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import { FriendsList } from '../components/FriendsList';

export function Home(){

  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);

  async function handleSearch(){
    const response = await fetch(`http://10.95.3.206:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  }

  const handleFollow = useCallback(() => {
    console.log('Follow user');
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Amigos</Text>

        <TextInput 
            style={styles.input}
            placeholder='Nome do Amigo'
            onChangeText={setName}
        />

        <Button 
            title="Buscar"
            onPress={handleSearch}
        />

            <FriendsList data={friends}/>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        padding: 25,
    },
    input: {
        borderWidth: 1,
        padding: 7,
        marginVertical: 10,
    },
    list: {
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})