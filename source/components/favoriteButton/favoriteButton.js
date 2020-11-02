import React, {useState, useEffect, useContext, useRef} from 'react';
import { TouchableOpacity, Animated, View, Image } from 'react-native';
import favTrue from './heartTrue.png';
import favBorder from './heartBorder.png';
import styles from './favoritebutton.style';
import {FavoriteContext} from '../../helpers/favoriteContext';

const FavoriteButton = props => {
  const {favorites, tapFavorite} = useContext(FavoriteContext);
  const recipe = props.recipe;

  const opacityAnimation = useRef(new Animated.Value(1)).current;

  const tintAnimation = opacityAnimation.interpolate({
    inputRange: [0,1],
    outputRange: ["rgb(255,0,0)", "rgb(255,255,255)"],
    extrapolate: "clamp"
  });

  const showBorder = () => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false
    }).start()
  };
  const hideBorder = () => {
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration:100,
      useNativeDriver: false,
    }).start()
  };


  useEffect(() => {
    if (favorites.includes(recipe.index)){
      hideBorder();
    } else{
      showBorder();
    }
  }, [favorites])
  
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => tapFavorite(recipe)} style={styles.favButtonTouch}>
      <View>
        <Animated.Image source={favTrue} style={[styles.favButton, {tintColor: tintAnimation}]} />
        <Animated.Image source={favBorder} style={{...styles.favButton, opacity:opacityAnimation}} />
      </View>
    </TouchableOpacity>
  )
};

export default FavoriteButton;