import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import RNQRGenerator from 'rn-qr-generator';

export default function App() {
  const openGallery = () => {
    launchImageLibrary({}, response => {
      console.log('Response = ', response.assets[0].uri);
      RNQRGenerator.detect({
        uri: response.assets[0].uri,
      })
        .then(response => {
          const {values} = response; // Array of detected QR code values. Empty if nothing found.
          console.log(values);
        })
        .catch(error => console.log('Cannot detect QR code in image', error));
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Choose Image" onPress={openGallery} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
