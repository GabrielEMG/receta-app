import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  favButton: {
    position: "absolute", 
    width: 40,
    height: 40,
    opacity: 0.6,
  },
  favButtonTouch: {
    position:"absolute", 
    width:40, 
    height:40,
    zIndex:1
  }
});

export default styles;