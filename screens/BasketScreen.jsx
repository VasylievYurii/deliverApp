import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import SafeViewAndroid from "../components/SafeViewAndroid/SafeViewAndroid";
import { XCircleIcon } from "react-native-heroicons/solid";
import Logo from "../assets/logo.png";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <>
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
        <View className="bg-gray-100 h-[100%]">
          <View className="bg-white border-b border-[#f59e0b] shadow-xs p-5">
            <View className="">
              <Text className="text-xl font-bold text-center">Basket</Text>
              <Text className="text-center text-gray-400">
                {restaurant.title}
              </Text>
            </View>
            <TouchableOpacity
              onPress={navigation.goBack}
              className="rounded-full bg-gray-100 absolute top-3 right-5"
            >
              <XCircleIcon size={50} color="#f59e0b" />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-3">
            <Image source={Logo} className="h-10 w-9" />
            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
              <Text className="text-[#f59e0b]">Change</Text>
            </TouchableOpacity>
          </View>
          <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View
                key={key}
                className="flex-row items-center space-x-3 px-5 py-2 bg-white"
              >
                <Text className="text-[#f59e0b]">{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-14 w-14 rounded-full"
                />
                <Text className="flex-1 text-base">{items[0]?.name}</Text>
                <Text className="text-gray-600">
                  <Currency quantity={items[0]?.price} currency="GBP" />
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <Text className="text-[#f59e0b]">Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View className="p-5 bg-white space-y-4 mt-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Subtotal</Text>
              <Text className="text-gray-400">
                <Currency quantity={basketTotal} currency="GBP" />
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Delivery free</Text>
              <Text className="text-gray-400">
                <Currency quantity={5.99} currency="GBP" />
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Order total</Text>
              <Text className="font-extrabold">
                <Currency quantity={basketTotal - 5.99} currency="GBP" />
              </Text>
            </View>
            <TouchableOpacity className="rounded-lg bg-[#f59e0b] p-4">
              <Text className="text-center text-white text-lg font-bold">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BasketScreen;
