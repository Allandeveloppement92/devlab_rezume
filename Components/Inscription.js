import React, { Component } from 'react';
import { View, StyleSheet,Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9, importation de la librairie

const Form = t.form.Form;

const User = t.struct({
  Nom: t.String, // champs facultatif
  Prénom: t.String,
  "Email": t.String,
  Téléphone: t.maybe(t.String), 
  'Mot de passe': t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    Prénom: {
      error: 'Entrez votre nom'
    },
    Prénom: {
      error: 'Entrez votre prénom'
    },
    Email: {
      error: 'Veuillez inserer votre adresse mail'
    },
    Email: {
      error: 'Veuillez inserer votre adresse mail'
    },
    terms: {
      label: 'Acceptez les termes !',
    },
  },
};
export default class App extends Component {

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
      <Form 
        ref={c => this._form = c} // assign a ref
        type={User} 
        options={options} // pass the options via props
      />
      <Button
        title="S'inscrire"
        onPress={this.handleSubmit}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

