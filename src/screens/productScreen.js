import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Snackbar} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Card from '../components/productCard';
import ArrowIcon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProductScreen = props => {
  const [visible, setVisible] = useState (false);
  const [snackMessage, setMessage] = useState ('');
  const [keys, setKeys] = useState ([]);

  useEffect (() => {
    AsyncStorage.getAllKeys ()
      .then (response => {
        setKeys (response);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const saveData = async saveObj => {
    try {
      await AsyncStorage.setItem (saveObj.nodeFour, JSON.stringify (saveObj));
      let keyArray = Array.from (keys);
      keyArray.push (saveObj.nodeFour);
      setKeys (keyArray);
      setVisible (true);
      setMessage ('Data Saved');
    } catch (error) {
      console.log (error);
    }
  };
  const deleteData = async data => {
    try {
      await AsyncStorage.removeItem (data.name);
      let keyArray = Array.from (keys);
      const index = keyArray.indexOf (data.name);
      if (index > -1) {
        keyArray.splice (index, 1);
      }
      setKeys (keyArray);
      setVisible (true);
      setMessage ('Data Deleted');
    } catch (error) {
      console.log (error);
    }
  };
  const selectData = (data, result) => {
    if (result) {
      deleteData (data);
    } else {
      var saveObj = props.route.params.saveData;
      saveObj.nodeFour = data.name;
      saveData (saveObj);
    }
  };
  const renderItem = ({item}) => (
    <Card
      data={item}
      saveData={props.route.params.saveData}
      onSelectData={selectData}
      selectedKeys={keys}
    />
  );
  return (
    <View style={styles.container}>
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
          <Text style={styles.headerName}>Product</Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {props.route.params.saveData.nodeThree}
        </Text>
      </View>
      <FlatList
        data={props.route.params.screenData.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={keys}
        contentContainerStyle={styles.flatlistContainer}
      />
      <Snackbar
        visible={visible}
        duration={1000}
        onDismiss={() => setVisible (false)}
      >
        {snackMessage}
      </Snackbar>
    </View>
  );
};

export default ProductScreen;

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
  container: {
    flex: 1,
  },
  flatlistContainer: {
    alignItems: 'center',
    marginVertical: 15,
    paddingBottom: 25,
  },
  titleContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: '',
    fontSize: hp (3),
    color: COLORS.indigo,
  },
});
