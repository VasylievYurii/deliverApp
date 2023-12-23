import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const Basket = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 p-4 bg-[#f59e0b] rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-lg text-white font-extrabold bg-[#dc9111] py-1 px-3 rounded-lg">
          {items.length}
        </Text>
        <Text className="text-lg text-white font-extrabold flex-1 text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;
