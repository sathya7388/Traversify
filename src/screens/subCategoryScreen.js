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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';

const SubCategoryScreen = props => {
  const selectData = (data, saveData) => {
    var saveObj = saveData;
    saveObj.nodeThree = data.name;
    props.navigation.navigate ('Product', {
      screenData: data,
      saveData: saveObj,
    });
  };
  const renderItem = ({item}) => (
    <Card
      data={item}
      onSelectData={selectData}
      saveData={props.route.params.saveData}
      screenName={'subCategoryScreen'}
    />
  );
  return (
    <View>
      <StatusBar backgroundColor={COLORS.teal} animated={true} />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => props.navigation.goBack ()}
        >
          <ArrowIcon
            name="arrow-back-ios"
            color={COLORS.white}
            size={25}
            backgroundColor={COLORS.teal}
          />
        </TouchableOpacity>
        <View style={styles.headerView}>
          <Text style={styles.headerName}>Sub Category</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.route.params.saveData.nodeTwo}</Text>
      </View>
      <FlatList
        data={props.route.params.screenData.subcategories}
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
    backgroundColor: COLORS.teal,
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
    alignItems: 'center',
    paddingBottom:100,
  },
  titleContainer:{
    paddingHorizontal:20,
    paddingVertical:5,
  },
  titleText:{
    fontWeight:'bold',
    fontFamily:'',
    fontSize: hp(3),
    color:COLORS.indigo,
  },
});

export default SubCategoryScreen;
