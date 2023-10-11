import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

const brasil = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#228b22',
    alignItems: 'center'
  },
  letras: {
    fontFamily: 'Arial',
    fontSize: 50,
    alignSelf: 'flex-end'
  },
  imageConteiner:{
    flex: 1,
    paddingTop: 58,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function app() {
  return ( 
    <View style={brasil.container}>
      <View style= {brasil.imageConteiner}>
      <Image style={brasil.image} source={{ uri: 'https://i.pinimg.com/564x/3f/0a/e0/3f0ae09e4c89530470a558b68ce46a56.jpg' }}></Image>
      </View>
      <StatusBar style='auto'/>

      <View style={brasil.container}>
      <Text style={brasil.letras}>Carteira nascional de transito</Text>
      <StatusBar style="auto" />
    </View>

      </View>
      
    );
    }