import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  View
} from 'react-native';


import Animated, { useSharedValue } from 'react-native-reanimated';
import HomeFollow from '../../components/HomeFollow';
import baseAPI from '../../services/baseAPI';
import { getStatusBarHeight } from '../../utils/StatusBar';
import INS_Item from './Items';
const reelUser = 'mrbeast';
const heightStatus = getStatusBarHeight(false);
const ITEM_HEIGHT = 650;

const { width } = Dimensions.get('window');
var itvSetY: string | number | NodeJS.Timeout | undefined;
var currentY = 0;
function Home(): React.JSX.Element {
  const [dataINS, setDataINS] = useState<any>(null);
  const [itemViewing, setItemViewing] = useState<any>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    loadDataINS();
  }, []);

  const loadDataINS = async () => {
    const res = await baseAPI.getReelAndPost({ user: reelUser, pageToken: '' });
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
    if (!dataINS?.pagination_token) {
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
  const height = useSharedValue(50);

  const onScroll = (e: any) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    clearInterval(itvSetY);
    itvSetY = setInterval(() => {
      currentY = offsetY;
    }, 300);
    let value = currentY - offsetY;
    height.value =
      value < 0
        ? value + height.value
        : value > 50 || height.value == 50
          ? 50
          : value;
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: '#F2F2F2', marginTop: heightStatus }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          width: width,
          height: height,
          backgroundColor: '#F2F2F2',
          zIndex: 1,
          flexDirection: 'row',
        }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ width: 120, height: '100%', marginLeft: 10 }}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png',
            }}
            resizeMode="contain"
          />
        </View>
      </Animated.View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={dataINS?.data?.items || []}
          style={{ paddingTop: 50 }}
          contentContainerStyle={{ paddingBottom: 100 }}
          onScroll={onScroll}
          scrollEventThrottle={16}
          onViewableItemsChanged={e => {
            console.log('onViewableItemsChanged:', e);
            setItemViewing(e);
          }}
          keyExtractor={(e, i) => `itemKey${i}`}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListHeaderComponent={() => <HomeFollow />}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMoreDataINS}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          renderItem={({ item, index }) => {
            const isPause =
              itemViewing?.viewableItems[0].index == index ? false : true;
            return (
              <View>
                <INS_Item item={item} index={index} isPause={isPause} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

});

export default Home;
