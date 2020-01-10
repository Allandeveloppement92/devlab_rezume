//Connexion

import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Image} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9, importation de la librairie

const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //RegExp
  return reg.test(email);
});

const User = t.struct({
  "Email": Email,
  'Mot de passe': t.String,
});

const options = {
  fields: {
    Email: {
      error: 'Inserez votre adresse mail'
    },
    'Mot de passe': {
      error: 'Inserez votre mot de passe',
      'Mot de passe':true, //Vérification du mot de passe 
      secureTextEntry:true //Sécurisation de celui-ci
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

            <View style={styles.containerA}>
                <Image
                    style={styles.logo}
                    source={require('./../assets/Logo1.png')}
                />
            </View>

                 <Text style={styles.title}>Connexion</Text>

                <Form 
                ref={c => this._form = c}
                type={User} 
                options={options}
                />

                <Button
                style={styles.inscrire}
                title="Se connecter"
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
    padding: 20,
    backgroundColor: '#ccebea',
  },
  containerA : {

    justifyContent:'center',
    alignItems:'center'


  },
  title: {

    textAlign:'center',
    fontSize:40,
    marginBottom:30,
    fontWeight:'bold',
    letterSpacing:1.5
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom:50,
  }
});
