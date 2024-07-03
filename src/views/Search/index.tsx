
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Item_Search from '../../components/Items_Search';
import baseAPI from '../../services/baseAPI';

var TOSeach: string | number | NodeJS.Timeout | undefined;
function Search(): React.JSX.Element {
  const [txtSearch, setTxtSearch] = useState('');
  const [dataSearch, setDataSearch] = useState<any>(null);

  useEffect(() => {
    clearTimeout(TOSeach);
    TOSeach = setTimeout(() => {
      loadData();
    }, 300);
  }, [txtSearch]);

  const loadData = async () => {
    if (!txtSearch) {
      setDataSearch(null);
      return;
    }

    const res = await baseAPI.getSearch({ user: txtSearch });
    if (res?.data) {
      setDataSearch(res);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerSearch}>
          <CBN_Icons name="search-outline" />
          <TextInput
            style={{ flex: 1, fontSize: 18, fontWeight: '500' }}
            placeholder="Tìm kiếm"
            value={txtSearch}
            onChangeText={e => setTxtSearch(e)}
          />
          {txtSearch && (
            <TouchableOpacity
              style={styles.btnCancel}
              onPress={() => setTxtSearch('')}>
              <Text style={{ fontSize: 18, fontWeight: '300' }}>Huỷ</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={dataSearch?.data?.items || []}
          style={{ paddingTop: 20 }}
          keyExtractor={(e, i) => `itemSearch${i}`}
          renderItem={({ item }) => {
            return (
              <Item_Search
                profile_pic_url={item?.profile_pic_url}
                full_name={item?.full_name}
                username={item?.username}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const CBN_Icons = ({ name = 'ellipsis-horizontal-outline' }) => {
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
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#c2c2c2',
  },
  containerSearch: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 12,
    flexDirection: 'row',
  },
  btnCancel: {
    height: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Search;
