import React, { useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, ImageBackground, View, Text} from 'react-native';


export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground
          style={styles.photo}
          source={{ uri: 'http://placekitten.com/g/400/400' }}
          >
          <Text>Hola ñau</Text>
      </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 400,
    width: 400,
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
