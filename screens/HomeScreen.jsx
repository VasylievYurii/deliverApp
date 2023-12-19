import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid/SafeViewAndroid";
import Logo from "../assets/logo.png";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View className="flex-row bg-white py-5">
          {/* Header */}
          <View className="flex-row items-center mx-4 space-x-4 flex-1 w-full">
            <View className="flex-row flex-1 items-center space-x-2">
              <Image source={Logo} className="h-10 w-10" />
              <View>
                <Text className="font-bold text-gray-400 text-xs">
                  Deliver now!
                </Text>
                <View className="relative">
                  <Text className="font-bold text-xl">Current Location</Text>
                  <View className="absolute top-1/4 -right-5">
                    <ChevronDownIcon size={20} color="#f59e0b" />
                  </View>
                </View>
              </View>
            </View>

            <UserIcon size={35} color="#f59e0b" />
          </View>
          {/* Search */}
          <View>
            <View></View>
            {/* <AdjustmentsHorizontalIcon size={20} color="#f59e0b" /> */}
          </View>
        </View>
      </SafeAreaView>
      <View className="bg-gray-100 flex-1"></View>
    </>
  );
};

export default HomeScreen;
