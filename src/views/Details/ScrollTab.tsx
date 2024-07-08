
import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  View,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from 'react-native';

import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import typeUserDetails from '../../types/typeUserDetails';
import { AppColors } from '../../utils/AppStyles';

const { width } = Dimensions.get('window');
const sizeItem = width / 3 - StyleSheet.hairlineWidth * 2
const sampleIMG = `https://scontent-mad2-1.cdninstagram.com/v/t51.2885-15/449177993_347857905032653_1582599942929778607_n.jpg?stp=dst-jpg_e15_p360x360&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIuZjcxODc4In0&_nc_ht=scontent-mad2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=MK4NRy1unh8Q7kNvgEPFzC-&edm=AJgCAUABAAAA&ccb=7-5&oh=00_AYAAuUsI1HIFMhuM7eR1gibKyVnO85BS3-iMAS7_gqRXvw&oe=6691B2B4&_nc_sid=f93d1f`
const SampleItem = () => {
  return <View style={{
    width: sizeItem, height: sizeItem,
    borderLeftWidth: StyleSheet.hairlineWidth, borderLeftColor: AppColors.background,
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: AppColors.background
  }}>
    <Image
      style={{ width: sizeItem, height: sizeItem }}
      source={{
        uri: sampleIMG,
      }}
      resizeMode="cover"
    />
  </View>
}
const FirstRoute = () => (
  <View style={{ flex: 1, minHeight: 123, backgroundColor: AppColors.background }} >
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
      numColumns={3}
      keyExtractor={(e, i) => `itemTab${i}`}
      scrollEnabled={false}
      // ItemSeparatorComponent={()=><View style={{width:'100%',height:1,backgroundColor:'blue',}}/>}
      renderItem={() => {
        return <SampleItem />
      }}
    />

  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor:AppColors.background }} />
);

const renderScene = SceneMap({
  tab_1: FirstRoute,
  tab_2: FirstRoute,
  tab_3: FirstRoute,
});
const ScrollTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tab_1', title: 'Tab 1', activeIcon: 'grid-outline' },
    { key: 'tab_2', title: 'Tab 2', activeIcon: 'terminal-outline' },
    { key: 'tab_3', title: 'Tab 3', activeIcon: 'people-outline' }
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
      renderTabBar={props => <TabBar
        {...props}
        inactiveColor={AppColors.textSecondary}
        renderIcon={(e) => {

          return <Ionicons name={e?.route?.activeIcon} size={22} color={e.focused ? "black" : AppColors.textSecondary} />
        }}
        renderLabel={() => null}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={{ backgroundColor: AppColors.backgroundSecondary }}
      />}

    />
  );
}
const styles = StyleSheet.create({

});

export default ScrollTab;
