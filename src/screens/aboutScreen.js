import React from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </View>
          <Text style={styles.heading}>About Me :</Text>
          <View style={styles.content}>
            <View style={{flexDirection: 'row'}}>
              <Avatar
                size="xlarge"
                rounded
                source={require ('../assets/images/image.jpg')}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
                <Text style={styles.profileText}>Sathya Narayanan</Text>
              </View>
            </View>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Standard dummy text ever since the 1500s, when an unknown printer took a galley
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Type and scrambled it to make a type specimen book.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              </Text>
            </Unorderedlist>
            <Unorderedlist bulletUnicode={0x2022}>
              <Text style={styles.text}>
                Publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
  },
  text: {
    color: COLORS.lightBlack2,
    padding: 3,
  },
  profileText: {
    color: COLORS.black,
    paddingLeft: 20,
  },
});

export default AboutScreen;
