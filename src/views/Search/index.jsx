/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
  TextInput,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import baseAPI from '../../services/baseAPI';
type SectionProps = PropsWithChildren<{
  title: string,
}>;

function Item({children, title}: SectionProps): React.JSX.Element {
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
}
var TOSeach;
function Search(): React.JSX.Element {
  const [txtSearch, setTxtSearch] = useState('');
  const [dataSearch, setDataSearch] = useState(null);

  useEffect(() => {
    clearTimeout(TOSeach);
    TOSeach = setTimeout(() => {
      loadData();
    }, 300);
  }, [txtSearch]);
  const loadData = async () => {
    if (!txtSearch) {
      setDataSearch(null)
      return;
    }

    const res = await baseAPI.getSearch({user: txtSearch});
    console.log('res:', res);
    if (res?.data) {
      setDataSearch(res);
    }
  };
  console.log("datas",dataSearch)
  return (
    <SafeAreaView style={{flex:1}}>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          flexDirection: 'row',
          paddingBottom:10,
          borderBottomWidth:StyleSheet.hairlineWidth,
          borderBottomColor:'#c2c2c2'
        }}>
        <View
        style={{
         flex:1,
          backgroundColor: '#fff',
          marginHorizontal: 15,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <CBN_Icons name="search-outline" />
        <TextInput
          style={{flex:1,fontSize: 18, fontWeight: '500'}}
          placeholder="Tìm kiếm"
          value={txtSearch}
          onChangeText={e => setTxtSearch(e)}
        />
        {txtSearch&&<TouchableOpacity 
        style={{height:50,width:60,justifyContent:'center',alignItems:'center'}} 
        onPress={()=>setTxtSearch('')}
        >
          <Text style={{fontSize:18,fontWeight:'300'}}>Huỷ</Text>
        </TouchableOpacity>}
      </View>
      </View>
      <View style={{flex:1}}>
        <FlatList 
        data={dataSearch?.data?.items||[]}
        style={{paddingTop:20}}
        keyExtractor={(e,i)=>`itemSearch${i}`}
        renderItem={({item})=>{

          return <View style={{
            width:'100%',height:80,
            marginBottom:5,
            flexDirection:'row',padding:5
            }}>
<Image
            style={{width: 70, height: 70, borderRadius:60,backgroundColor:'#fff'}}
            source={{
              uri: item?.profile_pic_url,
            }}
            resizeMode="contain"
          />
          <View style={{flex:1,justifyContent:'center',paddingHorizontal:10}}>
          <Text style={{fontSize:16,fontWeight:'500'}}>{item?.full_name}</Text>
          <Text style={{fontSize:14,color:'#c2c2c2'}}>{item?.username}</Text>
          </View>
          </View>
        }}
        />
        </View>
    </SafeAreaView>
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

export default Search;
