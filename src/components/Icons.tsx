
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
type IconsWrap_SearchProps = PropsWithChildren<{
  name: string,
  size: number,
  color: string,
  onPress:any
}>;
const Icon_Wrap = ({name='search',size=22,color='black',onPress}:IconsWrap_SearchProps) => {
  return (
    <TouchableOpacity 
    style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
    activeOpacity={1}
    onPress={onPress}
    >
    <Ionicons name={name} size={size} color={color} />
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

});

export default Icon_Wrap;
