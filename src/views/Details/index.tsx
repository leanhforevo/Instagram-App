
import React, { PropsWithChildren, useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import numeral from 'numeral';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header_Custom from '../../components/HeaderCustom';
import LoadingScreen from '../../components/LoadingScreen';
import baseAPI from '../../services/baseAPI';
import typeUserDetails from '../../types/typeUserDetails';
import { AppColors, FontSize } from '../../utils/AppStyles';
import ScrollTab from './ScrollTab';
interface DataProps extends PropsWithChildren {
  data?: typeUserDetails | null;
}

const DetailsScreen = (props: any) => {
  const { data } = props.route.params
  const [detail, setDetail] = useState<DataProps>({ data: null })
  console.log("props data", data)
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const res = await baseAPI.getDetailUser(data?.user?.username)

    if (res?.data) {
      // alert(data?.user?.username)
      setDetail(res);
    }
  }
  if (!detail?.data) return <LoadingScreen />
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.background }}>
      <Header_Custom title='Detail User' />
      <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          <View style={{ flex: 1, }} >
            <Image
              style={{
                width: 100, height: 100, borderRadius: 120,
                overflow: 'hidden', borderWidth: 1,
                borderColor: AppColors.backgroundSecondary
              }}
              source={{
                uri: data?.user?.profile_pic_url,
              }}
              resizeMode="contain"
            />

          </View>
          <View style={{
            flex: 3, justifyContent: 'center', alignItems: 'center',
            flexDirection: 'row', marginLeft: 10
          }}>
            <ItemData title={'Bài viết'} value={detail?.data?.media_count || 0} />
            <ItemData title={'Người theo dõi'} value={numeral(detail?.data?.follower_count).format('(0.00 a)')} titleSize={FontSize.small} />
            <ItemData title={'Đang theo dõi'} value={detail?.data?.following_count || 0} titleSize={FontSize.small} />
          </View>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: FontSize.body, lineHeight: 25, fontWeight: '500' }}>{detail?.data?.full_name}</Text>
          <Text style={{ fontSize: FontSize.body, lineHeight: 18 }}>{detail?.data?.biography}</Text>
          <Text style={{ fontSize: FontSize.body, fontWeight: '500', lineHeight: 25 }}>{'Xem bản dịch'}</Text>
        </View>
        <View style={{ paddingHorizontal: 15, flexDirection: 'row' }}>
          <View style={styles.btnFollow}>
            <Text style={styles.txtFollow}>{'Theo dõi'}</Text>
          </View>
          <View style={styles.btnMessage}>
            <Text style={styles.txtMessage}>{'Nhắn tin'}</Text>
          </View>
          <View style={styles.btnAddUser}>
            <Ionicons name='rocket' size={18} color={AppColors.textPrimary} />
          </View>
        </View>
        <ScrollView style={{ paddingVertical: 15 }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
            return <View key={`itema${i}`} style={styles.containerItemFollow} >
              <Image
                style={{
                  width: 80, height: 80, borderRadius: 80,
                  overflow: 'hidden', borderWidth: 1,
                  borderColor: AppColors.backgroundSecondary
                }}
                source={{
                  uri: data?.user?.profile_pic_url,
                }}
                resizeMode="contain"
              />
            </View>
          })}
        </ScrollView>
        <View style={{ width:'100%',minHeight:500 }} >
          <ScrollTab />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
type ItemDataProps = PropsWithChildren<{
  title: string;
  titleSize?: number | any;
  value: number | any;

}>;
const ItemData = ({ title, titleSize = FontSize.caption, value = 0 }: ItemDataProps) => <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
  <Text style={{ fontSize: FontSize.body }}>{value}</Text>
  <Text style={{ fontSize: titleSize }}>{title}</Text>
</View>
const styles = StyleSheet.create({
  btnFollow: { flex: 1, height: 37, backgroundColor: AppColors.textAccent, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  txtFollow: { fontSize: FontSize.button, color: AppColors.backgroundSecondary, lineHeight: 18, fontWeight: 'bold' },
  btnMessage: { flex: 1, height: 37, backgroundColor: AppColors.backgroundSecondary, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  txtMessage: { fontSize: FontSize.button, color: AppColors.textPrimary, lineHeight: 18, fontWeight: 'bold' },
  btnAddUser: { width: 37, height: 37, backgroundColor: AppColors.backgroundSecondary, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  containerItemFollow: { width: 80, height: 80, borderRadius: 80, overflow: 'hidden', backgroundColor: 'green', marginLeft: 15 }
});

export default DetailsScreen;
