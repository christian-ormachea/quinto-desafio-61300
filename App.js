import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Llamada a constantes
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts'
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store'
 

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if(!fontsLoaded){
    return( null )
  }

  return (
    
    <View style={styles.container}>
      <Provider store={store}>
        <TabNavigator/>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
