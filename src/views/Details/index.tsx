/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DetailsScreen =(props)=>  {
  // console.log("props DetailsScreen",props.route)
const {data}=props.route.params
console.log("props data",data)
  return (
    <SafeAreaView style={{flex:1}}>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default DetailsScreen;
