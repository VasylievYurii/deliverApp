import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import SafeViewAndroid from "../components/SafeViewAndroid/SafeViewAndroid";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import Logo from "../assets/logo.png";
import Bike from "../assets/Character-Loop-2.gif";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#f59e0b] flex-1">
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="z-50">
        <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-light">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image source={Bike} className="h-16 w-16" />
          </View>
          <Progress.Bar
            size={60}
            indeterminate={true}
            color="#f59e0b"
            className="mt-2"
          />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 -mb-2 z-10"
        mapType="mutedStandart"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description="restaurant.short_description"
          identifier="origin"
          pinColor="#f59e0b"
        />
      </MapView>
      <SafeAreaView
        style={SafeViewAndroid.AndroidSafeArea}
        className="bg-white flex-row items-center space-x-5 pb-7"
      >
        <Image source={Logo} className="h-12 w-9 ml-5" />
        <View className="flex-1">
          <Text className="text-lg">Yurii Vasyliev</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>
        <Text className="text-lg mr-5 font-bold text-[#f59e0b]">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
