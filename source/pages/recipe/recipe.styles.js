import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: "100%",
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderColor: "black",
    borderWidth: 1,
  },
  favButton: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    width: 60,
    height: 60,
  },
  boxedView: {
    marginTop: 50,
    backgroundColor: "rgba(255,255,255,0.6)",
    marginHorizontal: 10,
    borderRadius: 20,
    paddingBottom: 5,
  },
  textIngredient: {
    fontSize: 20,
    paddingVertical: 10,
    textAlign: "center",
    marginBottom: 20,
    borderBottomWidth: 1.5,
  },
  gobackButton: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 20,
    top: 20,
    zIndex: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  gobackButtonImage: {
    position: "absolute",
    width: 30,
    height: 30,
    tintColor: "black",
    left: 5,
    top: 5,
  },
  recipeTitleContainer: {
    height: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  recipeTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    flex: 1,
    color: "white",
  },
  preparationContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  stepWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 10,
  },
});

export default styles;
