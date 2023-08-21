import * as React from 'react';
import { ScrollView , View,Text, StyleSheet, Image, Pressable} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <View style={styles.spacer}></View>
    <Image style={styles.img} source={require('../assets/little-lemon-logo.png')} resizeMode='contain'></Image>
    <View style={{flex: 0.15}}></View>
    <Text style={styles.textStyle}>Little Lemon, your local Mediterranean Bistro</Text>
    <View style={styles.spacer}></View>
    <Pressable style={styles.button} onPressIn={
      ()=>navigation.navigate('Subscribe')
    }>
      <Text style={styles.buttonText}>
        Newsletter
      </Text>
    </Pressable>
  </View>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },

  spacer: {
    flex: 0.35
  },
  img:{
    width: 200,
    height: 200
  },
  textStyle:{
    fontSize: 22,
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#495E57',
    width: '100%',
    padding: 10,
    borderRadius: 20
  },
  buttonText:{
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
})
