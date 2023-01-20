import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableHighlight } from 'react-native';

//const { width, height} = Dimensions.get('window').width

export default function App() {
  const [text, setText] = useState('chanchito feliz')
  const [submit, setSubmit] = useState('')
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize:24}}>Texto: {submit}</Text>

      <TextInput 
        style={styles.input} 
        placeholder='Escribe acá'
        onChangeText={t => setText(t)}
        defaultValue={text}
        />
        <Button onPress={() =>{
          setSubmit(text)
          alert('Texto enviado con éxito!')
        }}title='Aceptar'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height:40,
    backgroundColor:'white',
    borderBottomWidth:1,
    width: '100%',
    textAlign:'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

///////