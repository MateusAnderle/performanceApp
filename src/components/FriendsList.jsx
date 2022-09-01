import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Friend } from './Friend';

export function FriendsList({data}){

  const totalLikes = useMemo(() => {

    return data.reduce((likes, friend) => {
      return likes + friend.likes
    }, 0)

  }, [data]);
  
  
  

  return (
    <View>
      <Text>
        Total de Likes: {totalLikes}
      </Text>

        <FlatList 
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Friend 
                data={item}
            />
          )}
        />

    </View>
  );
}