import {View, StyleSheet, Text,  } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import React from 'react'
import { colors } from '../global/colors'

const Home = ({navigation}) => {
  return (
    <View style= {{flex: 1, backgroundColor: colors.azulClaro}}>
      <Categories navigation={navigation}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
})