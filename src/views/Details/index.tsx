/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon_Wrap from '../../components/Icons';
import Header_Custom from '../../components/HeaderCustom';
const DetailsScreen = (props) => {
  // console.log("props DetailsScreen",props.route)
  const { data } = props.route.params
  console.log("props data", data)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header_Custom title='Detail User' />
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <View style={{ width: 120, height: 120, backgroundColor: 'orange', borderRadius: 120 }} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <ItemData title={'Bài viết'} value={123} />
            <ItemData title={'Người theo dõi'} value={123} />
            <ItemData title={'Đang theo dõi'} value={123} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const ItemData = ({ title, value }) => <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
  <Text style={{ fontSize: 18 }}>{value}</Text>
  <Text style={{ fontSize: 14 }}>{title}</Text>
</View>
const styles = StyleSheet.create({

});

export default DetailsScreen;
