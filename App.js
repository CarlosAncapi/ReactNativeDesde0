import React, { useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, View} from 'react-native';


export default function App() {


  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#0000f" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22,
    
  }
});
