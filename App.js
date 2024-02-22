import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Llamada a constantes
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts'
import Navigator from './src/navigation/Navigator';
 

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  if(!fontsLoaded){
    return( null )
  }

  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
