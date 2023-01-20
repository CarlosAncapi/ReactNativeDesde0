import React, { useState, useEffect} from 'react';
import { StyleSheet, Alert, View, Text, Button} from 'react-native';

const crearDialogo = () => Alert.alert(
  'Titulo',
  'Subtitulo o mensaje que podemos agregar a este dialogo...',
  [
    {
      text: 'Cancelar',
      onPress: () => {},
      style: "cancel",
    },
    {
      text: 'Aceptar',
      onPress: () => console.log('boton presionado')
    }
  ],
  { cancelable: false }
)

export default function App() {
  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      
      <Button title="Abrir Dialogo" onPress={crearDialogo}/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
    
  }
});

///
