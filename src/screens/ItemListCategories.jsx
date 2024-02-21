import { Text, View, FlatList  } from 'react-native'
import { React, useEffect, useState } from 'react'
import allProducts  from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import Header from '../components/Header'

const ItemListCategories = ({category}) => {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  useEffect(()=> { 
    if(category){
      const products = allProducts.filter((product) => product.category === category);
      const productsFiltered = products.filter((product) => product.title.includes(keyword));
      setProducts(productsFiltered);
    }
   }, [category, keyword])

  return (
    <View>
      <Header title={'Lista de Productos'}/>
      <Search keyword={keyword} onSearch={setKeyword}/>
      <FlatList
      data={products}
      renderItem={ ({ item }) =>
      <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ItemListCategories