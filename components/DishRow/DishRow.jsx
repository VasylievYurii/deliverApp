import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
} from "../../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  let quantityItems = [];
  const getQuantityItems = (items, id) => {
    if (!items.length > 0) return;
    quantityItems = items.filter((item) => item.id === id);
    return quantityItems;
  };
  getQuantityItems(items, id);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`flex-row items-center p-4 border-b border-b-neutral-200 bg-white space-x-2 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-1 ">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400 mb-2">{description}</Text>
          <Text className="text-gray-400">
            <Currency quantity={price} currency="GBP" />
          </Text>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#f3f3f4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4 rounded"
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center p-4 border-b border-b-neutral-200 bg-white space-x-2">
          <TouchableOpacity
            onPress={removeItemFromBasket}
            disabled={!quantityItems.length}
          >
            <MinusCircleIcon
              size={40}
              color={quantityItems.length > 0 ? "#f59e0b" : "gray"}
            />
          </TouchableOpacity>

          <Text>{quantityItems.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={40} color="#f59e0b" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
