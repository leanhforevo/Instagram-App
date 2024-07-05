
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Icon_Wrap from './Icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigationRef,pop } from '../utils/RootNavigation';
type Header_Custom_SearchProps = PropsWithChildren<{
  title: string
}>;
const Header_Custom = ({ title = '' }: Header_Custom_SearchProps) => {
  return (<View style={{ width: '100%', height: 50,flexDirection:'row' }}>
    <Icon_Wrap name='chevron-back-outline' size={22} color={'black'} onPress={()=>pop()}/>
    <View style={{ flex:1,justifyContent:'center',alignItems:'center' }}>
      <Text style={{ color: 'black',fontSize:20,fontWeight:'500' }}>{title}</Text>
    </View>
    <View style={{width:50}}/>
  </View>
  );
}

const styles = StyleSheet.create({

});

export default Header_Custom;
