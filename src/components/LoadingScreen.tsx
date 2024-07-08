
import type { PropsWithChildren } from 'react';
import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { AppColors } from '../utils/AppStyles';
import Header_Custom from './HeaderCustom';

const LoadingScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }}>
      <Header_Custom title='-' />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={AppColors.primary} />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

});

export default LoadingScreen;
