import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useIsFocused} from '@react-navigation/native';
import Unorderedlist from 'react-native-unordered-list';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {COLORS} from '../constants/colors';

const AboutScreen = () => {
  const FocusAwareStatusBar = props => {
    const isFocused = useIsFocused ();
    return isFocused ? <StatusBar {...props} /> : null;
  };

  return (
    <View>
      <FocusAwareStatusBar backgroundColor={COLORS.grayBlue} animated={true} />
      <View style={styles.header}>
        <Text style={styles.headerName}>About</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Traversify :</Text>
          <View style={styles.content}>
            <Text style={styles.text}>
              Traversify is built using react-native to show stacked navigation, tab navigation and storage that is maintained only when the app is active.
            </Text>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>Features :</Text>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Material Bottom Navigation</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Stack Navigation</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Async Storage</Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>Splash Screen</Text>
            </Unorderedlist>
          </View>
          <Text style={styles.heading}>About Me :</Text>
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <Avatar
                size="xlarge"
                rounded
                source={require ('../assets/images/image.jpg')}
              />
              <View style={styles.profileContainer}>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
                <Text style={styles.profileText}>Experience : 3 years</Text>
                <Text style={styles.profileText}>
                  Role : Software Developer
                </Text>
              </View>
            </View>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Worked in ERP project devoping various modules. Like Business tax Calculation , Paid Leaves Calculation and Salary Calculation.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Web Application that monitor build and deployment jobs in jenkins and provides with failure reason, success and failure ratio.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Technologies : HTML5, CSS, JavaScript, jQuery, PostgreSQL, MySQL, java, ReactJS, Chart.js, Android, iOS Development
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text
                style={[styles.text, styles.textLink]}
                onPress={() =>
                  Linking.openURL (
                    'https://www.linkedin.com/in/sathya-narayanan-6a5362b1'
                  )}
              >
                LinkedIn Profile
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text
                style={[styles.text, styles.textLink]}
                onPress={() =>
                  Linking.openURL ('https://github.com/sathya7388/ShopAny')}
              >
                React-Native Project - ShopAny
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text
                style={[styles.text, styles.textLink]}
                onPress={() =>
                  Linking.openURL ('https://github.com/sathya7388/Traversify')}
              >
                React-Native - Traversify
              </Text>
            </Unorderedlist>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({
  header: {
    height: hp (8),
    backgroundColor: COLORS.grayBlue,
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
  container: {
    margin: 15,
    paddingBottom: 60,
  },
  content: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    padding: 15,
    borderRadius: 6,
    borderColor: COLORS.black,
    elevation: 5,
  },
  heading: {
    fontSize: hp (2.5),
    color: COLORS.lightBlack1,
    fontWeight:'bold',
  },
  text: {
    color: COLORS.lightBlack2,
    padding: 3,
  },
  profileText: {
    color: COLORS.black,
    paddingLeft: 20,
    paddingBottom: 15,
  },
  textLink: {
    color: COLORS.indigo,
    textDecorationLine: 'underline',
  },
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default AboutScreen;
