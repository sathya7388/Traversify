import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DetailEndcard = ({data,saveData, onSelectData, selectedKeys}) => {
  let result = selectedKeys.includes (data.name);
  const sendData = () => {
    onSelectData (data, result);
  };
  return (
    <TouchableOpacity style={cardStyle.container} onPress={sendData}>
        <View style={[cardStyle.inner,result ? cardStyle.selected : cardStyle.inner]}>
          <Checkbox
            style={cardStyle.checkbox}
            status={result ? 'checked' : 'unchecked'}
            onPress={sendData}
            color={COLORS.indigo}
          />
          <View style={[cardStyle.dataView]}>
            <Text>{data.name}</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
};

const cardStyle = StyleSheet.create ({
  selected:{
    width: wp (89),
  },
  inner: {
    backgroundColor: COLORS.white,
    width: wp (90),
    height: hp (8),
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  container: {
    marginVertical: 10,
    backgroundColor: COLORS.indigo,
    width: wp (90),
    height: hp (8),
    elevation: 5,
    borderRadius: 5,
  },
  dataView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  checkbox: {
    flex: 1,
  },
});

export default DetailEndcard;
