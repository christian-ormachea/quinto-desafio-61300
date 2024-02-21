import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Llamada a constantes
import Constants from 'expo-constants';
//Llamada a screens
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts'
 

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  const [fontsLoaded] = useFonts(fonts);


  if(!fontsLoaded){
    return( null )
  }

  return (
    <>
      { categorySelected ? (
        <View style={styles.container}>
          <ItemListCategories category = {categorySelected}/>
        </View>
        ) : (
          <View style={styles.container}>
            <Home setCategorySelected={setCategorySelected}/>
          </View>
        )
      }
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
