import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';

function HomeFollow(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://media.istockphoto.com/id/92409833/photo/going-to-work-in-snow-storm-or-rainy-weather.jpg?s=612x612&w=0&k=20&c=grB2srdzH-jKegzEEfDhlXjGWNx8GlXWKfO643ji1uc=',
          }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#c2c2c2',
    padding: 10,
  },
  containerItem: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default HomeFollow;
