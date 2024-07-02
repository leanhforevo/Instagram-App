import React, {useEffect, useState} from 'react';
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

import baseAPI from '../../services/baseAPI';

const reelUser = 'mrbeast';
function Home(): React.JSX.Element {
  const [dataINS, setDataINS] = useState(null);

  useEffect(() => {
    loadDataINS();
  }, []);

  const loadDataINS = async () => {
    const res = await baseAPI.getReelAndPost({user: reelUser});
    if (res?.data) {
      setDataINS(res);
    }
    
  };

  const loadMoreDataINS = async () => {
    if (!dataINS.pagination_token) {
      console.log('Not found pagination_token');
      return;
    }
    const res = await baseAPI.getReelAndPost({
      user: reelUser,
      pageToken: dataINS.pagination_token,
    });
    if (res?.data) {
      const dataArr = [...dataINS.data.items, ...res.data.items];
      res.data.count = dataArr.length;
      res.data.items = dataArr;

      setDataINS(res);
    }
  };
  console.log("dataINS:",dataINS)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.lighter}}>
      <View style={{height: 50, width: '100%', backgroundColor: 'blue'}}></View>

      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <View style={{height: 80, backgroundColor: 'red'}}></View>
      </View>
    </SafeAreaView>
  );
}

type INS_ItemProps = PropsWithChildren<{
  title: string,
}>;

const INS_Item = ({children, title}: INS_ItemProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
