import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  StatusBar,
} from "react-native";
import image from "../assets/background.jpg";

import { FriendsList } from "../components/FriendsList";
import { Loader } from "../components/Loader";
import { Button } from "../components/Button";

import Animated, { FadeInUp } from "react-native-reanimated";
import api from "../utils/api";

export interface DataProps {
  id: number;
  name: string;
  likes: number;
}

export function Home() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(deleteDuration = 0) {
    const deleteDurationValidated =
      typeof deleteDuration === "number" ? deleteDuration : 0;
    try {
      setIsLoading(true);
      const { data, duration } = await api.get(`/friends?q=${name}`);
      setFriends(data);
      setDuration(duration + deleteDurationValidated);
    } catch (error) {
      Alert.alert("Something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFollow = useCallback(async (item: DataProps) => {
    try {
      setIsLoading(true);
      const response = await api.delete(`/friends/${item.id}`);
      const deleteDuration = response.duration;
      handleSearch(Number(deleteDuration));
    } catch (error) {
      Alert.alert("Something went wrong");
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Animated.View entering={FadeInUp.duration(1000)}>
          <StatusBar barStyle="light-content" />
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Friends</Text>
            <Text style={styles.subtitle}>Request time: {duration}ms</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Friend's name"
            onChangeText={setName}
          />

          <Button title="Search" onPress={handleSearch} />
        </Animated.View>

        {isLoading ? (
          <Loader />
        ) : (
          <FriendsList data={friends} follow={handleFollow} />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 25,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  containerWrapper: {
    marginTop: 50,
    padding: 25,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 0,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 15,
  },
  list: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontWeight: "bold",
    color: "#fff",
  },
});
