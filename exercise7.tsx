import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.main}>
      {/* Bar Atas */}
      <View style={styles.topBar}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Logo Tengah */}
      <View style={styles.centerContent}>
        <Image
          source={require('./logo unklab with word.png')}
          style={styles.logo}
        />
      </View>

      {/* Bar Bawah */}
      <View style={styles.bottomBar}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    gap: 15,
    paddingLeft: 15,
    height: 80,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
    height: 80,
  },
  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
});