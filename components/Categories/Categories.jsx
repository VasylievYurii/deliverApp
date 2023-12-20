import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "../CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categories Card */}
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 1"
      />

      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 2"
      />

      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 3"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 3"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 3"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 3"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 3"
      />
      <CategoriesCard
        imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-and-sesame-seeds_23-2148700369.jpg?w=996&t=st=1703017453~exp=1703018053~hmac=72f5832505061e80c342c0bcffcc92008a4cf24b560d70fa17be518d6841d08f"
        title="Test 3"
      />
    </ScrollView>
  );
};

export default Categories;
