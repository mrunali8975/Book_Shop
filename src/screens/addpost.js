import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
const AddPost = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  // const [isLoading,setIsLoading]=useState(false)
  // const dbref=firebase.firestore().collection('Books');

  // const addpost =()=>
  // {

  //    try {
  //      setIsLoading(true)
  //      dbref.add(
  //       {
  //         Title:title,
  //         Author:author,
  //         Price:price
  //       }

  //      ).then({

  //      }).catch((err)=>
  //      {
  //        console.log(err,'error in add')
  //      })

  //    } catch (error) {
  //      console.log(error,'error in add post')
  //    }

  // }

  // const ValidInputs =()=>

  // {
  //  if (title=='' && author=='',price=='')
  //  {
  //    return false
  //  }
  // return true;

  // }

  useEffect(() => {
    requestUserPermission();
    notificationListner();
    createChannel();
    getChannels();
  }, []);

  const handlesubmit = () => {
    LocalNotification();
    console.log('title -->', title, 'author -->', author, 'price -->', price);
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
        {/* <Text style={{fontSize:30,fontWeight:'1000',textAlign:'center',color:'black'}}> BOOK STORE</Text> */}
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
          <Text style={styles.submittext}>Submit</Text>
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
    backgroundColor: 'grey',
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
    backgroundColor: '#8ecae6',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },
});
export default AddPost;
