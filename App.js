import React, { useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, Image, View } from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      <Image 
          style={styles.photo}
          source={{ uri: 'http://placekitten.com/g/200/200' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
    
  }
});

///
