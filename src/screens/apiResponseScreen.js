import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {OutlinedTextField} from '@softmedialab/react-native-material-textfield';
import {COLORS} from '../constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ApiScreen = props => {
  const [apiResponse, setResponse] = useState ({
    ip: '',
    countryCode: '',
    countryName: '',
    region_name: '',
    city: '',
    zip_code: '',
    time_zone: '',
    latitude: '',
    longitude: '',
    metro_code: '',
  });
  const [isLoading, setLoading] = useState (false);
  useEffect (
    () => {
      // const unsubscribe = props.navigation.addListener ('focus', () => {
        LogBox.ignoreAllLogs ();
        setLoading (true);
        const requestOptions = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        };
        fetch ('https://freegeoip.app/json/', requestOptions)
          .then (response => {
            return response.json ();
          })
          .then (response => {
            setResponse ({
              ip: response.ip,
              countryCode: response.country_code,
              countryName: response.country_name,
              regionName: response.region_code,
              city: response.city,
              zipCode: response.zip_code,
              timeZone: response.time_zone,
              latitude: response.latitude.toString (),
              longitude: response.longitude.toString (),
              metroCode: response.metro_code.toString (),
            });
          })
          .catch (error => {
            console.log (error);
          })
          .finally (() => {
            setLoading (false);
          });
      // });
      // return unsubscribe;
    },
    []
  );

  const FocusAwareStatusBar = props => {
    const isFocused = useIsFocused ();
    return isFocused ? <StatusBar {...props} /> : null;
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={COLORS.lightblue} animated={true} />
      {isLoading
        ? <View style={styles.activity}>
            <ActivityIndicator size="large" color={COLORS.lightblue} />
          </View>
        : <View style={styles.content}>
            <ScrollView>

              <OutlinedTextField
                label="Ip Address"
                value={apiResponse.ip}
                disabled={true}
              />
              <OutlinedTextField
                label="Country code"
                value={apiResponse.countryCode}
                disabled={true}
              />
              <OutlinedTextField
                label="Country name"
                value={apiResponse.countryName}
                disabled={true}
              />
              <OutlinedTextField
                label="Region name"
                value={apiResponse.regionName}
                disabled={true}
              />
              <OutlinedTextField
                label="City"
                value={apiResponse.city}
                disabled={true}
              />
              <OutlinedTextField
                label="zipcode"
                value={apiResponse.zipCode}
                disabled={true}
              />
              <OutlinedTextField
                label="Time zone"
                value={apiResponse.timeZone}
                disabled={true}
              />
              <OutlinedTextField
                label="Latitude"
                value={apiResponse.latitude}
                disabled={true}
              />
              <OutlinedTextField
                label="Longitude"
                value={apiResponse.longitude}
                disabled={true}
              />
              <OutlinedTextField
                label="Metro code"
                value={apiResponse.metroCode}
                disabled={true}
                labelTextStyle={styles.textTitle}
              />
            </ScrollView>
          </View>}
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp (100),
    backgroundColor:COLORS.white,
  },
  activity: {
    height: hp (100),
    marginTop: 60,
    alignItems: 'center',
  },
  content: {
    marginTop: 20,
    width: wp (90),
  },
  textTitle: {
    color: COLORS.black,
  },
});
export default ApiScreen;
