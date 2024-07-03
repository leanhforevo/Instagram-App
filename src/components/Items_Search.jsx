import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View, Image} from 'react-native';
type Item_SearchProps = PropsWithChildren<{
  profile_pic_url: string,
  full_name: string,
  username: string,
}>;
function Item_Search({
  profile_pic_url,
  full_name,
  username,
}: Item_SearchProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgItem}
        source={{
          uri: profile_pic_url,
        }}
        resizeMode="contain"
      />
      <View style={styles.containerItemData}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>{full_name}</Text>
        <Text style={{fontSize: 14, color: '#c2c2c2'}}>{username}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    marginBottom: 5,
    flexDirection: 'row',
    padding: 5,
  },
  imgItem: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: '#fff',
  },
  containerItemData: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default Item_Search;
