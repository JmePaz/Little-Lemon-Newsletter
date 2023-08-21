import * as React from 'react';
import { View, Image, TextInput, Text, Pressable, Alert, StyleSheet } from 'react-native';
import { ValidateEmail, validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [emailAddress, setEmailAddress] = React.useState('')
  const [isValidEmail, setStatusEmail] = React.useState(false)

  // Add subscribe screen code here
  return <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={[styles.img, {marginVertical: 30}]} resizeMode='contain'></Image>
      <Text style={styles.caption}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput style={styles.inputText} 
      placeholder={'Type your email'}
      value={emailAddress}
      onChangeText={(newEmail)=>{
        setEmailAddress(newEmail)
        const statusEmail = validateEmail(newEmail)
        setStatusEmail(statusEmail)
      }}>
      </TextInput>
      <Pressable style={[styles.button, {
              backgroundColor: isValidEmail?'#495E57':'grey',
        }]}
       onPress={()=>{Alert.alert('Sent Successfuly','Thanks for subscribing, stay tuned!')
        setEmailAddress('')
      }}
       disabled={!isValidEmail}>
        <Text style={styles.buttonText}>
          Subscribe
        </Text>
      </Pressable>
  </View>;
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  img:{
    height: 150,
    width: 150
  },
  caption:{
    fontSize: 20,
    textAlign: 'center'
  },
  inputText:{
    fontSize: 20,
    height: 50,
    width: '95%',
    borderWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 30
  },
  button:{
    paddingHorizontal: 5,
    paddingVertical: 8,
    width: '95%',
    borderRadius: 10,
  },
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
})