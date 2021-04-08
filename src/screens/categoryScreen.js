import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Card from '../components/card';
import {COLORS} from '../constants/colors';
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CategoryScreen = props => {
  const selectData = (data, saveData) => {
    var saveObj = saveData;
    saveObj.nodeTwo = data.name;
    props.navigation.navigate ('SubCategory', {
      screenData: data,
      saveData: saveObj,
    });
  };
  const renderItem = ({item}) => (
    <Card
      data={item}
      onSelectData={selectData}
      saveData={props.route.params.saveData}
      screenName={'CategoryScreen'}
    />
  );
  return (
    <View>
      <StatusBar backgroundColor={COLORS.indigo} animated={true} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => props.navigation.goBack ()}
        >
          <ArrowIcon
            name="arrow-back-ios"
            color={COLORS.white}
            size={25}
            backgroundColor={COLORS.indigo}
          />
        </TouchableOpacity>
        <View style={styles.headerView}>
          <Text style={styles.headerName}>Category</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.route.params.saveData.nodeOne}</Text>
      </View>
      <FlatList
        data={props.route.params.screenData.categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
    paddingLeft: 20,
  },
  headerView: {
    flex: 3,
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
    paddingHorizontal: 20,
    paddingBottom:100,
  },
  titleContainer:{
    paddingHorizontal:30,
    paddingVertical:5,
  },
  titleText:{
    fontWeight:'bold',
    fontFamily:'',
    fontSize: hp(3),
    color:COLORS.indigo,
  },
});

export default CategoryScreen;
