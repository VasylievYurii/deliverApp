import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid/SafeViewAndroid";
import Logo from "../assets/logo.png";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {...,
restaurants[]->{..., dishes[]->}}`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View className="bg-white p-5 pb-3">
          {/* Header */}
          <View className="flex-row mb-3">
            <View className="flex-row flex-1 items-center space-x-2">
              <Image source={Logo} className="h-10 w-9" />
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
          <View className="flex-row space-x-2 items-center">
            <View className="flex-row flex-1 space-x-2 bg-gray-100 p-2 rounded-md">
              <MagnifyingGlassIcon size={30} color="gray" />
              <TextInput
                className="placeholder:italic placeholder:text-white"
                placeholder="Restaurants and cuisines"
                keyboardType="default"
              />
            </View>
            <AdjustmentsHorizontalIcon size={30} color="#f59e0b" />
          </View>
        </View>
      </SafeAreaView>
      {/* Body */}
      <ScrollView className="bg-gray-100 flex-1">
        {/* Categories */}
        <Categories />
        {/* Featured */}

        {featuredCategories?.map((category) => {
          // console.log("category:", category);
          return (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
