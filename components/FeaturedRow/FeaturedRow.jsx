import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../RestaurantCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="flex-row justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={30} color="#f59e0b" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards */}
        <RestaurantCard
          id="4test"
          imgUrl="https://img.freepik.com/free-photo/top-view-tasty-cooked-fish-with-vegetables-and-lemon-slices-on-dark-table_140725-143861.jpg?w=996&t=st=1703027700~exp=1703028300~hmac=78f3e32577f7627ce373404c052924c612103b95e7baf28fed5edbba6314e223"
          title="Fish"
          rating={4.5}
          genre="Norway"
          address="123 Main St"
          short_description="This is the test dish"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
