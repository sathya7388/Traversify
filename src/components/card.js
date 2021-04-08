import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../constants/colors';
import ArrowIcon from 'react-native-vector-icons/SimpleLineIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const card = ({data, onSelectData, saveData, screenName}) => {
  const sendData = () => {
    onSelectData (data, saveData);
  };
  if (screenName == 'homeScreen') {
    return (
      <TouchableOpacity style={cardStyle.container} onPress={sendData}>
        <Text>{data.name}</Text>
      </TouchableOpacity>
    );
  } else if (screenName == 'CategoryScreen') {
    return (
      <TouchableOpacity style={cardStyle.containerCategory} onPress={sendData}>
        <Text>{data.name}</Text>
      </TouchableOpacity>
    );
  } else if (screenName == 'subCategoryScreen') {
    return (
      <TouchableOpacity
        style={cardStyle.containerSubCategory}
        onPress={sendData}
      >
        <View style={{flex: 8, alignItems: 'center'}}>
          <Text>{data.name}</Text>
        </View>
        <View style={{flex: 1}}>
          <ArrowIcon name="arrow-right" color={COLORS.black} size={25} />
        </View>
      </TouchableOpacity>
    );
  }
};

const cardStyle = StyleSheet.create ({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: COLORS.white,
    width: wp (90),
    height: hp (10),
    elevation: 5,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCategory: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 20,    
    backgroundColor: COLORS.white,
    width: wp (40),
    height: hp (15),
    elevation: 5,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSubCategory: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingLeft: 30,
    backgroundColor: COLORS.white,
    width: wp (90),
    height: hp (13),
    elevation: 5,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default card;
