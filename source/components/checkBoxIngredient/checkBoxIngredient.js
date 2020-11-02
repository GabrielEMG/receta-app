import CheckBox from "@react-native-community/checkbox";
import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

const CheckBoxIngredient = (props) => {
  const [isActive, setIsActive] = useState(false);
  const ingredient = props.ingredient;
  const fontTextSize = useRef(new Animated.Value(15)).current;

  const colorChange = fontTextSize.interpolate({
    inputRange: [15, 17],
    outputRange: ["rgba(255,255,255,0)", "rgba(255,255,255,0.6)"],
    useNativeDriver: false,
  });

  const resizeCheckButton = fontTextSize.interpolate({
    inputRange: [15, 17],
    outputRange: [0.8, 1.2],
    useNativeDriver: true,
  });

  const bigFontSize = () => {
    Animated.timing(fontTextSize, {
      toValue: 17,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const smallFontSize = () => {
    Animated.timing(fontTextSize, {
      toValue: 15,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    isActive ? bigFontSize() : smallFontSize();
  }, [isActive]);

  return (
    <TouchableOpacity onPress={() => setIsActive(!isActive)}>
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 20,
          paddingVertical: 5,
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          backgroundColor: colorChange,
        }}
      >
        <Animated.View style={{ transform: [{ scale: resizeCheckButton }] }}>
          <CheckBox
            value={isActive}
            onValueChange={setIsActive}
            style={{ flex: 1 }}
          />
        </Animated.View>
        <Animated.Text
          style={{
            marginLeft: 5,
            flex: 1,
            fontSize: fontTextSize,
          }}
        >
          {ingredient}
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CheckBoxIngredient;
