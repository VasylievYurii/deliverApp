import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute left-1 top-14 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
