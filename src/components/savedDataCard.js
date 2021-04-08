import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const dataCard = ({data}) => {
  return (
    <View style={cardStyle.container}>
      <Text>
        {data.value.nodeOne +
          ' -> ' +
          data.value.nodeTwo +
          ' -> ' +
          data.value.nodeThree}

      </Text>
      <Text style={cardStyle.nodeFont}>{'-> ' + data.value.nodeFour}</Text>
    </View>
  );
};

const cardStyle = StyleSheet.create ({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal:20,
    backgroundColor: COLORS.white,
    width: wp (90),
    height: hp (14),
    elevation: 5,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodeFont: {
    fontWeight: 'bold',
  },
});

export default dataCard;