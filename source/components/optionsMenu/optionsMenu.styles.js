import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  menuWraper:{
    position: "absolute",
    top: -40,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  button: {
    position: "absolute",
    top: -35,
    right: 5
  },
  icon: {
    width:40, 
    height:40, 
    borderWidth:1, 
    borderColor:"black", 
    borderRadius:10,
  },
  menu: {
    position: "absolute",
    zIndex:2,
    height: "50%",
    width: "50%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 21,
    top:"25%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowRadius: 21,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.7,
  },
  options: {
    zIndex:3,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor:"black",
    zIndex:3,
    flex:1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,150,200,0.97)",
  },
});

export default styles;