import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Addbooks} from '../utils/firestoredatabase';

import {
  requestUserPermission,
  notificationListner,
  LocalNotification,
  createChannel,
  getChannels,
} from '../utils/notification';
import PushNotification from 'react-native-push-notification';
const logoimage =
  '/home/mambhore/React Native/RNnotificationdemo/src/assets/download.png';
// import firebase from '../utils/Firebase';
const AddPost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');


 
  useEffect(() => {
    requestUserPermission();
    notificationListner();
    createChannel();
    getChannels();
  }, []);

  const handlesubmit = () => {
    if (title != '' && author != '' && price != '') {
      Addbooks(title, author, price);
      console.log('title -->', title, 'author -->', author, 'price -->', price);
      LocalNotification();
    } else {
      console.log('error');
      ToastAndroid.show('Required all field !!', ToastAndroid.LONG);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require(logoimage)} />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
      </View>
      <View style={styles.formcontainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Title"
          onChangeText={value => setTitle(value)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Author name"
          onChangeText={value => setAuthor(value)}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={value => setPrice(value)}
          placeholder="price"
        />

      
        <TouchableOpacity style={styles.submit} onPress={handlesubmit}>
          <Text style={styles.submittext}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formcontainer: {
    marginTop: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 10,
  },

  submit: {
    backgroundColor: '#6a994e',
    borderRadius: 10,
    width: '50%',
    margin: 10,
    padding: 10,
  },
  submittext: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  textinput: {
    fontSize: 20,
    backgroundColor: '#e9ecef',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },

});
export default AddPost;
