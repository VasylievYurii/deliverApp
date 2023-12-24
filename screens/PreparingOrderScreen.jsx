import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import SafeViewAndroid from "../components/SafeViewAndroid/SafeViewAndroid";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  });
  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-[#cedddf] justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/city.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-full h-full"
      />
      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        className="absolute bottom-3/4 text-base text-[#184c11] text-bold"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="#f59e0b"
        className="absolute bottom-14"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
