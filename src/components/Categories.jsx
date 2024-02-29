import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { colors } from '../global/colors'
import React from 'react'
import Counter from './Counter'
import { useSelector } from 'react-redux'

const Categories = ({navigation}) => {
  const categories = useSelector((state) => state.shopReducer.value.categories)


  return (
    <View style={{flex: 1,}}>
      <Counter/>
      <View style={styles.container}>
        <Text style={styles.text}> Lista de Categorias: </Text>
      </View>
      <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryItem category={item} navigation={navigation}/>
      )}
      keyExtractor={(category) => category}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.azulDelMedio,
      borderBottomWidth: 1,
      borderBottomColor: colors.azulClaro,
  },
  text: {
    fontSize: 20,
    color: colors.beige,
    textAlign: 'center',
    fontFamily: 'Bold'
  }
})