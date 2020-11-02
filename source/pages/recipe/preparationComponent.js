import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./recipe.styles";

const Preparation = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={styles.stepWrapper}
      activeOpacity={0.8}
    >
      <Text
        style={{
          textAlignVertical: "center",
          marginRight: 10,
        }}
      >
        {props.index + 1})
      </Text>
      <Text
        style={{
          textDecorationLine: checked ? "line-through" : "none",
          marginRight: 15,
          fontSize: 15,
        }}
      >
        {props.step}
      </Text>
    </TouchableOpacity>
  );
};

export default Preparation;
