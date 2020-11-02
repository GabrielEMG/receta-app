import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './recipePaper.style';

import FavoriteButton from '../favoriteButton';
import { useNavigation } from '@react-navigation/native';


const RecipePaper = props => {
  const navigation = useNavigation();
  const recipe = props.recipe;
  const width = props.dimensions;
  const goto = () => {
    navigation.navigate("RecipePage", {recipe})
  }
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => goto()}>
      <View style={styles.container, {width:width/3, height: width/3, marginVertical:20, marginHorizontal:width/18}}>
        <Image resizeMode="cover" source={recipe.image} style={styles.image} />
        <View style={styles.favButtonTouch}>
          <FavoriteButton recipe={recipe} style={styles.favButtonTouch} />
        </View>
          <Text style={styles.title}>
            {recipe.title}
          </Text>
      </View>
    </TouchableOpacity>
  )
};

export default RecipePaper;