import React, { memo } from "react";
import { Text, TouchableOpacity, StyleSheet, ViewToken } from "react-native";
import lodash from "lodash";
import { BlurView } from "expo-blur";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { DataProps } from "../screens/Home";

interface FriendsProps {
  data: DataProps;
  follow: (args: DataProps) => void;
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

function FriendComponent({ data, follow, viewableItems }: FriendsProps) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === data.id)
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.2),
        },
      ],
    };
  }, []);

  return (
    <Animated.View style={rStyle}>
      <BlurView intensity={20} style={styles.blurContainer}>
        <Text style={styles.text}>
          {data.name} - Likes: {data.likes}
        </Text>

        <TouchableOpacity
          onPress={() => follow(data)}
          style={styles.subtitleWrapper}
        >
          <Text style={styles.subtitle}>Unfollow</Text>
        </TouchableOpacity>
      </BlurView>
    </Animated.View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data);
});

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(17, 25, 40, 0.5)",
    borderRadius: 5,
    borderColor: "rgba(17, 25, 40, 0.65)",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitleWrapper: {
    marginVertical: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#A1CDF1",
    borderRadius: 20,
  },
  subtitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
  },
});
