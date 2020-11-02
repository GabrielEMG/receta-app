import React, { useEffect, useRef } from "react";
import FavoriteButton from "../../components/favoriteButton";
import CheckBoxIngredient from "../../components/checkBoxIngredient";
import chefImage from "../../../assets/chef.jpg";
import styles from "./recipe.styles";
import { useNavigation } from "@react-navigation/native";
import backImage from "./left-arrow.png";
import Preparation from "./preparationComponent";
import {
  Image,
  Dimensions,
  View,
  Animated,
  ScrollView,
  Text,
  ImageBackground,
  BackHandler,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const heightWindow = Dimensions.get("window").height;
const HEADER_MAX_HEIGHT = heightWindow / 2;
const HEADER_MIN_HEIGHT = 0;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const RecipePage = ({ route }) => {
  const { recipe } = route.params;
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const headerMargin = animatedScrollYValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.goBack();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "black", marginTop: 22 }}>
      <ImageBackground
        source={chefImage}
        imageStyle={{ opacity: 0.5 }}
        style={{ flex: 1 }}
      >
        <Animated.Image
          style={{ height: headerMargin, ...styles.image }}
          source={recipe.image}
        />

        <Animated.View style={{ ...styles.favButton, top: 20 }}>
          <FavoriteButton recipe={recipe} />
        </Animated.View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={styles.gobackButton}
        >
          <Image source={backImage} style={styles.gobackButtonImage} />
        </TouchableOpacity>

        <Animated.ScrollView
          contentContainerStyle={{
            paddingTop: HEADER_MAX_HEIGHT / 2,
            paddingBottom: 200,
            justifyContent: "center",
          }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: animatedScrollYValue } } }],
            { useNativeDriver: false }
          )}
        >
          <View
            style={{
              ...styles.recipeTitleContainer,
              marginBottom: HEADER_MAX_HEIGHT / 2 - 50,
            }}
          >
            <Text style={styles.recipeTitle}>{recipe.title}</Text>
          </View>

          <View style={styles.boxedView}>
            <Text style={styles.textIngredient}>Ingredientes</Text>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, index) => (
                <CheckBoxIngredient key={index} ingredient={ingredient} />
              ))}
          </View>

          <View style={{ ...styles.boxedView }}>
            <Text style={styles.textIngredient}>Preparación</Text>
            <View style={styles.preparationContainer}>
              {recipe.preparation.map((step, index) => (
                <Preparation step={step} index={index} />
              ))}
            </View>
          </View>
        </Animated.ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RecipePage;
