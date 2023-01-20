import React, { useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, Modal, ImageBackground, View, Text, Button} from 'react-native';


export default function App() {
  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
      > 
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button title="cerrar modal" onPress={() => setModal(!modal)}></Button>
          </View>
        </View>
      </Modal>
      <Text> no soy el modal!</Text>
      <Text> no soy el modal!</Text>
      <Text> no soy el modal!</Text>
      <Text> no soy el modal!</Text>
      <Text> no soy el modal!</Text>
      <Button title="Abrir modal" onPress={() => setModal(!modal)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:25
  },
  center: {
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
    
  }
});

///
