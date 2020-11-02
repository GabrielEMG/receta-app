import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, SafeAreaView, FlatList, Dimensions, ImageBackground, Text, TextInput, Animated } from 'react-native';
import RecipePaper from '../components/recipePaper';
import rawData from '../data';
import OptionsMenu from '../components/optionsMenu';
import {FavoriteContext} from '../helpers/favoriteContext';
import chefImage from '../../assets/chef.jpg';

const HomePage = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const [searcher, setSearcher] = useState("");
  const data = rawData;
  const [filteredData, setFilteredData] = useState([]);
  const {favorites, favoritesOn} = useContext(FavoriteContext);
  const clearTextInput = useRef(null);

  useEffect(() => {
    const filter = data.filter(recipe => recipe.title.toLowerCase().includes(searcher.toLowerCase()));
    setFilteredData(filter);
  }, [searcher])

  useEffect(() => {
    let filter = data;
    if (favoritesOn) filter = data.filter(recipe => favorites.includes(recipe.index));
    setFilteredData(filter)
  }, [favoritesOn])
  
  return (
    <View style={{marginTop:22, backgroundColor: "black"}}>
      <ImageBackground source={chefImage} imageStyle={{opacity:0.5}} style={{height:"100%"}} resizeMode="cover" >
      <View style={{paddingVertical:20}}>
        <TextInput 
          ref={clearTextInput}
          onChangeText={(text) => setSearcher(text)}
          style={{

            borderWidth:1,
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: 6,
            marginHorizontal: 10,
            paddingHorizontal: 5,
            marginRight : 50,
            fontSize: 15,
          }} 
        />
        <OptionsMenu clearTextInput={clearTextInput} />
      </View>
      <SafeAreaView>
        <FlatList numColumns={2} 
          contentContainerStyle={{alignItems:"center", paddingBottom:200}}
          data={filteredData}
          keyExtractor={(item) => item.index}
          renderItem={({item}) => <RecipePaper dimensions={windowWidth} recipe={item}/>}
        />
      </SafeAreaView>
      </ImageBackground>
    </View>
  )
};

export default HomePage;