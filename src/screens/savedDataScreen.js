import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import {LogBox} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import DataCard from '../components/savedDataCard';
import {COLORS} from '../constants/colors';

const SavedDataScreen = props => {
  const [selectedData, setSelectedData] = useState ([]);
  const [isLoading, setLoading] = useState (false);
  const FocusAwareStatusBar = props => {
    const isFocused = useIsFocused ();
    return isFocused ? <StatusBar {...props} /> : null;
  };
  useEffect (
    () => {
      setLoading (true);
      const unsubscribe = props.navigation.addListener ('focus', () => {
        setLoading (true);
        LogBox.ignoreAllLogs ();
        AsyncStorage.getAllKeys ()
          .then (keys => {
            return AsyncStorage.multiGet (keys);
          })
          .then (value => {
            if (value !== null) {
              var dataArray = [];
              for (var i = 0; i < value.length; i++) {
                var dataObj = {};
                dataObj.id = value[i][0];
                dataObj.value = JSON.parse (value[i][1]);
                dataArray.push (dataObj);
              }
              setSelectedData (dataArray);
            }
          })
          .catch (error => {
            console.log (error);
          })
          .finally (() => {
            setLoading (false);
          });
      });
      setLoading (false);
      return unsubscribe;
    },
    [props.navigation]
  );
  const renderItem = ({item}) => <DataCard data={item} />;

  return (
    <View>
      {isLoading
        ? <View style={styles.activity}>
            <ActivityIndicator size="large" color={COLORS.lightblue} />
          </View>
        : <View>
            <FocusAwareStatusBar
              backgroundColor={COLORS.lightblue}
              animated={true}
            />
            {selectedData.length > 0 == true
              ? <View style={styles.listContainer}>
                  <View>
                    <View
                      style={{
                        alignItems: 'flex-end',
                        marginHorizontal: 25,
                        marginTop: 15,
                      }}
                    >
                      <Text style={styles.noDataText}>
                        {'Count : ' + selectedData.length}
                      </Text>
                    </View>
                    <FlatList
                      data={selectedData}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      contentContainerStyle={styles.flatlistStyle}
                    />
                  </View>
                </View>
              : <View style={styles.noData}>
                  <Image
                    style={styles.image}
                    source={require ('../assets/images/no_result.gif')}
                  />
                  <Text style={styles.noDataText}>
                    {' '}Sorry! No saved Data Found :(
                  </Text>
                </View>}
          </View>}
    </View>
  );
};

const styles = StyleSheet.create ({
  activity: {
    height: hp (100),
    marginTop: 30,
    alignItems: 'center',
  },
  flatlistStyle: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 110,
  },
  listContainer: {
    height: hp (92),
    // paddingBottom: 60,
  },
  noData: {
    height: hp (100),
    backgroundColor: COLORS.white,
    paddingVertical: 100,
    alignItems: 'center',
  },
  noDataText: {
    fontWeight: 'bold',
    fontSize: hp (2),
    color: COLORS.textBlue,
  },
  image: {
    height: hp (30),
    width: wp (80),
    marginBottom: 20,
  },
});

export default SavedDataScreen;
