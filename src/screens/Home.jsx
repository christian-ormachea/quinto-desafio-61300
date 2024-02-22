import {View, StyleSheet, Text,  } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style= {{flex: 1}}>
      <Categories navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
})