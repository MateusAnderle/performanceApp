import React, { useMemo } from "react";
import { View, Text, FlatList, ViewToken } from "react-native";
import { Friend } from "./Friend";
import { useSharedValue } from "react-native-reanimated";
import { numberFormatter } from "../utils/numberFormatter";
import { DataProps } from "../screens/Home";

interface FriendsListProps {
  data: DataProps[];
  follow: (args: DataProps) => void;
}

export function FriendsList({ data, follow }: FriendsListProps) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  const viewableItems = useSharedValue<ViewToken[]>([]);

  const ItemSeparator = () => (
    <View style={{ height: 10, backgroundColor: "transparent" }} />
  );

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: "#fff",
          marginTop: 5,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Total likes: {numberFormatter(totalLikes)}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        onViewableItemsChanged={({ viewableItems: vItems }) =>
          (viewableItems.value = vItems)
        }
        renderItem={({ item }) => (
          <Friend data={item} follow={follow} viewableItems={viewableItems} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
