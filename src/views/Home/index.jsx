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
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Swiper from 'react-native-swiper';
import {getStatusBarHeight} from '../../utils/StatusBar';
import Video, {VideoRef} from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import baseAPI from '../../services/baseAPI';
import INS_Item from './Items';
const reelUser = 'mrbeast';
const heightStatus = getStatusBarHeight();
const ITEM_HEIGHT = 650;
function Home(): React.JSX.Element {
  const [dataINS, setDataINS] = useState(null);
  const [itemViewing, setItemViewing] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadDataINS();
  }, []);

  const loadDataINS = async () => {
    const res = await baseAPI.getReelAndPost({user: reelUser});
    if (res?.data) {
      setDataINS(res);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadDataINS();
    setRefreshing(false);
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
  console.log('dataINS:', dataINS);
  return (
    <View style={{flex: 1, backgroundColor: '#fff', marginTop: heightStatus}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 50,
          width: '100%',
          backgroundColor: 'blue',
          zIndex: 1,
        }}></View>

      <View style={{flex: 1}}>
        <FlatList
          data={dataINS?.data?.items || []}
          style={{paddingTop: 50}}
          contentContainerStyle={{paddingBottom: 100}}
          onViewableItemsChanged={e => {
            console.log('onViewableItemsChanged:', e);
            setItemViewing(e);
          }}
          keyExtractor={(e, i) => `itemKey${i}`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={() => (
            <View style={{height: 120, backgroundColor: 'red'}}></View>
          )}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreDataINS}
          // ItemSeparatorComponent={() => (
          //   <View style={{width: '100%', height: 5, backgroundColor: 'red'}} />
          // )}
          getItemLayout={(data, index) => (
            {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
          )}
          renderItem={({item, index}) => {
            const isPause =
              itemViewing?.viewableItems[0].index == index ? false : true;
              console.log("isPause:",index,'-',isPause)
            // const isPause =false;
            return (
              <View>
                {/* <Text>isPause:{isPause?'true':'false'}</Text> */}
                <INS_Item item={item} index={index} isPause={isPause}/>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const CBN_Icons = ({name = 'ellipsis-horizontal-outline'}) => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Ionicons name={name} size={22} color={'black'} />
    </View>
  );
};
// type INS_ItemProps = PropsWithChildren<{
//   title: string,
// }>;

// const INS_Item = ({children, title}: INS_ItemProps) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

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

  wrapper: {},
  slide1: {},
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home;
