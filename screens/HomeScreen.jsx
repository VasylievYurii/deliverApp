import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid/SafeViewAndroid";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <Text className="text-red-500">HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
