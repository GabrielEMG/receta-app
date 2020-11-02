import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginVertical: 5,
  },
  title: {
    position: "absolute",
    top: "60%",
    height: "40%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 2,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.5)",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 30,
  },
  favButton: {},
  favButtonTouch: {
    position: "absolute",
    right: -13,
    top: -7,
    width: 40,
    height: 40,
  },
});

export default styles;
