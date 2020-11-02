import React, {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
  const [favoritesOn, setFavoritesOn] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      let favs = await AsyncStorage.getItem("f");
      favs = JSON.parse(favs);
      if (!favs) await AsyncStorage.setItem("f", JSON.stringify(favorites));
      setFavorites(favs)
    };
    getFavorites();
  }, [])

  const tapFavorite = async (recipe) => {
    let favs = await AsyncStorage.getItem("f");
    favs = JSON.parse(favs);
    if (!favs) favs = [];
    if(favs.includes(recipe.index)) favs = favs.filter(ind => ind != recipe.index)
    else favs = [recipe.index, ...favs];
    setFavorites(favs)
    favs = JSON.stringify(favs);
    await AsyncStorage.setItem("f", favs)
  }


  return (
    <FavoriteContext.Provider value={{favorites, setFavorites, tapFavorite, favoritesOn, setFavoritesOn}}>
      {children}
    </FavoriteContext.Provider>
  )
};

export {FavoriteProvider, FavoriteContext}
