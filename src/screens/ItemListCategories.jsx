import { Text, View, FlatList, Pressable, StyleSheet  } from 'react-native'
import { React, useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import Header from '../components/Header'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'

const ItemListCategories = ({navigation}) => {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  const productsFilteredByCategory = useSelector((state) => state.shopReducer.value.productsFilteredByCategory)

  useEffect(()=> { 
    const productsFiltered = productsFilteredByCategory.filter((product) => product.title.includes(keyword))
    setProducts(productsFiltered)

   }, [productsFilteredByCategory, keyword])

  return (
    <View style={{flex: 1,backgroundColor: colors.azulClaro}}>
      <Search keyword={keyword} onSearch={setKeyword}/>
      <FlatList
      data={products}
      renderItem={ ({ item }) =>
      <ProductItem product={item} navigation={navigation}/>}
      keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.azulOscuro,
    paddingVertical: 10,
    alignItems: 'flex-start'
  },
  text: {
    borderWidth: 1,
    borderColor: colors.beige,
    borderRadius: 10,
    color: colors.beige,
    marginLeft: 10,
    padding: 5,
    fontSize: 18,
    backgroundColor: 'black',
  }
})