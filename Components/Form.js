// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button,FlatList,Text } from 'react-native'
import { bold } from 'ansi-colors'

class Form extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Text style={styles.title}>Inscription</Text>
        <TextInput style={styles.textinput} placeholder='Nom'/>
        <TextInput style={styles.textinput} placeholder='Prénom'/>
        <TextInput style={styles.textinput} placeholder='Email'/>
        <TextInput style={styles.textinput} placeholder='Téléphone'/>
        <Button style={styles.button} title='Envoyer' onPress={() => {}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginRight:20
  },
  title:{
    textAlign:'center',
    fontSize:35,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:20
    
    
  },
  textinput: {
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderRadius:10,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  button: {
    
  }
})

export default Form