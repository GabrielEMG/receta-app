import Swipeable from "react-native-gesture-handler/Swipeable";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./optionsMenu.styles";
import { FavoriteContext } from "../../helpers/favoriteContext";
import bulletMenu from "./bulletMenu.png";
import {
  TouchableOpacity,
  Image,
  Switch,
  View,
  Text,
  Animated,
  Dimensions,
} from "react-native";

const OptionsMenu = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { favoritesOn, setFavoritesOn } = useContext(FavoriteContext);
  const [heightWindow, setHeightWindow] = useState(
    Dimensions.get("window").height
  );
  const [widthWindow, setWidthWindow] = useState(
    Dimensions.get("window").width
  );

  const clearTextInput = props.clearTextInput;

  Dimensions.addEventListener("change", (e) => {
    const { width, height } = e.window;
    setHeightWindow(height);
    setWidthWindow(width);
  });

  const animationPog = useRef(new Animated.Value(0)).current;

  const menuBackgroundColor = animationPog.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0,0,0,0.01)", "rgba(0,0,0,0.4)"],
    useNativeDriver: false,
  });

  const menuPositionX = animationPog.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "25%"],
    useNativeDriver: false,
  });

  const iconTint = animationPog.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(0,0,0)", "rgb(255,255,255)"],
    useNativeDriver: false,
  });
  const bgIcon = animationPog.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,255,255)", "rgb(0,0,0)"],
    useNativeDriver: false,
    extrapolate: "clamp",
  });

  const activeTrue = () => {
    Animated.timing(animationPog, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(setIsActive(true));
  };
  const activeFalse = () => {
    Animated.timing(animationPog, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setIsActive(false));
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          clearTextInput.current.blur();
          activeTrue();
        }}
      >
        <Animated.Image
          source={bulletMenu}
          style={{
            ...styles.icon,
            tintColor: iconTint,
            backgroundColor: bgIcon,
          }}
        />
      </TouchableOpacity>

      {isActive && (
        <Animated.View
          style={{
            ...styles.menuWraper,
            width: widthWindow,
            height: heightWindow,
            backgroundColor: menuBackgroundColor,
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => activeFalse()}
          >
            <Animated.View style={{ ...styles.menu, left: menuPositionX }}>
              <TouchableOpacity style={{ width: "100%", height: "100%" }}>
                <View style={[styles.options]}>
                  <Text style={{ fontSize: 20, marginBottom: 30 }}>
                    Favorite
                  </Text>
                  <Switch
                    value={favoritesOn}
                    onValueChange={(val) => setFavoritesOn(val)}
                  />
                </View>
              </TouchableOpacity>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default OptionsMenu;
