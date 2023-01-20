import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SectionList} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Grupo 1',
            data: [
            { key: '1', name: 'carlos' },
            { key: '2', name: 'pedrito' },
            { key: '3', name: 'juan' },
            { key: '4', name: 'vale' },
            { key: '5', name: 'Vicky' },
            { key: '6', name: 'cancerbero' },
            { key: '7', name: 'carlos' },
            { key: '8', name: 'pedrito' },
            { key: '9', name: 'juan' },
            { key: '10', name: 'vale' }
            ]
          },
          {
            title: 'Grupo 2',
            data: [
              { key: '11', name: 'Vicky' },
              { key: '12', name: 'cancerbero' },
              { key: '13', name: 'carlos' },
              { key: '14', name: 'pedrito' },
              { key: '15', name: 'juan' },
              { key: '16', name: 'vale' },
              { key: '17', name: 'Vicky' },
              { key: '18', name: 'cancerbero' },
              { key: '19', name: 'carlos' },
              { key: '20', name: 'pedrito' },
              { key: '21', name: 'juan' },
              { key: '22', name: 'vale' },
              { key: '23', name: 'Vicky' },
              { key: '24', name: 'cancerbero' }
            ]
          }
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
      />
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
    
  },
  item: {
    padding:10,
    height:50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  section:{
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#eee',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom:2,
    textAlign: 'center'

    }

  
});
