import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "../RestaurantCard";
import client from "../../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  console.table("restaurants:", restaurants);

  useEffect(() => {
    client
      .fetch(
        `
  *[_type == "featured" && _id == $id] {
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type-> {
        name
      }
    }
  }[0]
`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

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
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              // imgUrl="https://img.freepik.com/free-photo/top-view-tasty-cooked-fish-with-vegetables-and-lemon-slices-on-dark-table_140725-143861.jpg?w=996&t=st=1703027700~exp=1703028300~hmac=78f3e32577f7627ce373404c052924c612103b95e7baf28fed5edbba6314e223"
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              short_description={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
