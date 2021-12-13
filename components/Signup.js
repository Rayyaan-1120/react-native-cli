import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');

  const submit = () => {
    if (confirmpassword === password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => firestore().collection('users').doc(userCredential.user.uid).set({
            email,
            Name:username
    }).then(() => navigation.navigate('Frontscreen')).catch(() => alert('there is an error in passing the data')))
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      return alert('passwords do not match');
    }
  };

  console.log(username);

  return (
    <ScrollView>
      <View style={styles.maindiv}>
        <KeyboardAvoidingView>
          <View style={styles.imagediv}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image
                source={require('../images/startpagetwo.png')}
                style={{width: 220, height: 220, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputdivs}>
            <View>
              <Text style={styles.textstyle}>Create an account</Text>
            </View>

            <View style={styles.inputsdiv}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                onChangeText={value => setusername(value)}
              />
            </View>
            <View style={styles.inputsdiv}>
              <TextInput
                style={styles.input}
                placeholder="email"
                onChangeText={value => setemail(value)}
              />
            </View>
            <View style={styles.inputsdiv}>
              <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry
                onChangeText={value => setpassword(value)}
              />
            </View>
            <View style={styles.inputsdiv}>
              <TextInput
                style={styles.input}
                placeholder="confirm password"
                secureTextEntry
                onChangeText={value => setconfirmpassword(value)}
              />
            </View>
            <View style={styles.inputsdiv}>
              <TouchableOpacity style={styles.btn} onPress={submit}>
                <Text
                  style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                  Create an account
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{color: '#565197', fontSize: 16}}>
                  already has an account? Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default Signup;

export const styles = StyleSheet.create({
  maindiv: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  imagediv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputdivs: {
    flex: 2,
    // backgroundColor:'red',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: 5,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  inputsdiv: {
    width: '90%',
  },
  btn: {
    width: '100%',
    padding: 6,
    borderRadius: 5,
    borderWidth: 0,
    backgroundColor: '#565197',
    marginVertical: 10,
  },
  textstyle: {
    fontSize: 25,
    color: '#565197',
    fontWeight: 'bold',
  },
});
