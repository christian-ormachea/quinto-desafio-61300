import {View, StyleSheet, Text,  } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import React from 'react'

const Home = ({setCategorySelected}) => {
  return (
    <View style= {{flex: 1}}>
      <Header title={'Inicio'}/>
      <Categories setCategorySelected={setCategorySelected}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
})