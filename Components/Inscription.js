//Inscription Etudiants

import React, { Component } from 'react';
import { View, StyleSheet,Button,Text} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9, importation de la librairie

const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //RegExp
  return reg.test(email);
});

const User = t.struct({
  Nom: t.String, 
  Prénom: t.String,
  "Email": Email,
  Téléphone: t.maybe(t.String), // champs facultatifs
  'Mot de passe': t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    Nom: {
      error: 'Inserez votre nom' //message d'erreur si vide
    },
    Prénom: {
      error: 'Inserez votre prénom'
    },
    Email: {
      error: 'Inserez votre adresse mail'
    },
    'Mot de passe': {
      error: 'Inserez votre mot de passe',
      'Mot de passe':true, //Vérification du mot de passe 
      secureTextEntry:true //Sécurisation de celui-ci
    },
    terms: {
      label: 'Acceptez les termes !',
      error: 'Veuillez acceptez les termes'
    },
  },
};
export default class App extends Component {

  handleSubmit = () => {
    const value = this._form.getValue(); //Récupérartion des valeurs du formulaire
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Inscription</Text>
        <Text style={styles.titlebis}>Étudiants</Text>
        
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />

        <Button
          title="S'inscrire"
          onPress={this.handleSubmit}
        />

      </View>
    );
  }
}

//Ajout de style
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    //marginTop: 50,
    padding: 20,
    backgroundColor: '#ccebea',
  },
  title: {

    textAlign:'center',
    fontSize:40,
    marginBottom:15,
    fontWeight:'bold',
    letterSpacing:1.5
  },
  titlebis: {
    textAlign:'center',
    fontSize:20,
    marginBottom:25,
    fontWeight:'bold',
    letterSpacing:1.5
  }
});

