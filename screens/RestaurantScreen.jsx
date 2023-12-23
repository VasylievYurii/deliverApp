import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import Basket from "../components/Basket";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <Basket />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#f59e0b" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row my-1 gap-2">
              <StarIcon size={22} color="#f59e0b" opacity={0.5} />
              <Text className="text-s text-gray-500">
                <Text className="text-amber-500">{rating}</Text> &#x2022;
                {genre}
              </Text>
              <View className="flex-row space-x-1 w-2/3 pr-4">
                <MapPinIcon size={22} color="#f59e0b" opacity={0.5} />
                <Text className="text-sm text-gray-500 text-pretty">
                  {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4 text-base">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row justify-between items-center p-4 border-y border-gray-300">
            <View className="flex-row gap-2">
              <QuestionMarkCircleIcon size={22} color="gray" opacity={0.5} />
              <Text className="text-md font-bold">Have a food allergy?</Text>
            </View>
            <ChevronRightIcon size={20} color="#f59e0b" opacity={0.5} />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="p-4 font-bold text-xl pb-2 bg-amber-200 text-center">
            Menu
          </Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
