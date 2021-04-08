import React from 'react';
import {View, StyleSheet, FlatList, StatusBar, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../components/card';
import * as screenData from '../../data';
import {COLORS} from '../constants/colors';

const HomeScreen = props => {
  const FocusAwareStatusBar = props => {
    const isFocused = useIsFocused ();
    return isFocused ? <StatusBar {...props} /> : null;
  };

  const selectData = (data, saveData) => {
    var saveObj = {};
    saveObj.nodeOne = data.name;
    props.navigation.navigate ('Category', {
      screenData: data,
      saveData: saveObj,
    });
  };
  const renderItem = ({item}) => (
    <Card
      data={item}
      onSelectData={selectData}
      saveData={null}
      screenName={'homeScreen'}
    />
  );
  return (
    <View>
      <FocusAwareStatusBar backgroundColor={COLORS.indigo} animated={true} />
      <View style={styles.header}>
        <Text style={styles.headerName}>Traversify</Text>
      </View>
      <FlatList
        data={screenData.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};
const styles = StyleSheet.create ({
  header: {
    height: hp (7),
    backgroundColor: COLORS.indigo,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerName: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontSize: hp (3),
    fontFamily: 'sans-serif-thin',
    paddingHorizontal: 20,
  },
  flatlistContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
