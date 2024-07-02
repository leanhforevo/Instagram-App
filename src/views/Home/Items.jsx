import React, {useEffect, useState, memo} from 'react';
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

const reelUser = 'mrbeast';
const heightStatus = getStatusBarHeight();
const ITEM_HEIGHT = 650;

var timeRender=0
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
type INS_ItemProps = PropsWithChildren<{
  item: object,
  index: number,
  isPause:boolean
}>;

const INS_Item = ({item, index, isPause}: INS_ItemProps) => {
  const [pau,setPau]=useState(true)
  timeRender+=1
  return (
    <View
      style={{
        width: '100%',
        height: ITEM_HEIGHT,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 40, height: 40, borderRadius: 40}}
            source={{
              uri: item?.user?.profile_pic_url,
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {item?.user?.full_name}
          </Text>
          <Text style={{fontSize: 15, fontWeight: '500'}}>👀 {item?.user?.mrbeast}</Text>
        </View>
        <View
          style={{
            height: 60,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#c2c2c2',
              borderRadius: 10,
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Theo dõi</Text>
          </View>
          <View
            style={{
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={'ellipsis-horizontal-outline'}
              size={22}
              color={'black'}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        {!item.has_audio &&
        item.carousel_media &&
        item.carousel_media.length > 0 ? (
          <Swiper style={styles.wrapper} showsButtons={false}>
            {(item.carousel_media || []).map((e, i) => {
              return (
                <View
                  key={`itemKeyList${index}ofItem${i}`}
                  style={styles.slide1}>
                  <Image
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri: e.thumbnail_url,
                    }}
                  />
                </View>
              );
            })}
          </Swiper>
        ) : !item.is_video ? (
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: item.thumbnail_url,
            }}
          />
        ) : null}
        {item.is_video ? (
          <Video
            // Can be a URL or a local file.
            source={{uri: item?.video_url}}
            thumbnail={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}

            onBuffer={() => {
              console.log('onBuffer');
            }}
            // Callback when video cannot be loaded
            onError={() => {
              console.log('onError');
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
            rate={1}
            volume={10}
            muted={false}
            ignoreSilentSwitch={null}
            fullscreen={false}
            repeat={true}
            paused={isPause} //disable auto play
            // paused={true}
            autoplay={false}
            preventsDisplaySleepDuringVideoPlayback={false}
          />
        ) : null}
      </View>

      {/* bottom Item */}
      <View style={{height: 160, zIndex: 1}}>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CBN_Icons name={'heart-outline'} />
            <CBN_Icons name={'heart-outline'} />
            <CBN_Icons name={'chatbubble-outline'} />
          </View>
          <View style={{width: 50}}>
            <CBN_Icons name={'open-outline'} />
          </View>
        </View>
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <Text style={{fontSize: 16, fontWeight: '500', lineHeight: 16}}>
            322.212 lượt thích
          </Text>
          <Text style={{fontSize: 16, fontWeight: '400', lineHeight: 20}}>
            NokeyNoway Black showwwwww!
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#c2c2c2',
              lineHeight: 20,
            }}>
            Xem tất cả 1.212 bình luận
          </Text>
        </View>
        <View
          style={{
            height: 50,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 30, height: 30, borderRadius: 30}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#c2c2c2',
                lineHeight: 20,
              }}>
              Thêm bình luận...
            </Text>
          </View>
        </View>
      </View>
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

export default memo(INS_Item);
