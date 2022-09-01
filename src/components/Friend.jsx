import React, { memo } from 'react';
import { Text } from 'react-native';
import lodash from 'lodash';

function FriendComponent({data}){
  return (
    <Text>
        { data.name } - Likes: { data.likes }
    </Text>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data);
})