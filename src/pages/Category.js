/* eslint-disable */
import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

const Category = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home screen</Text>
        <Button
          title={"dkssud"}
          onPress={() => {
            navigation.navigate("Setting");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;
