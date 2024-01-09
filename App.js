import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
/* 
bibliotecas icons
expo => instalador: npm install @expo/vector-icons
react-native+> npm install react-native-vector-icons
*/
import { FontAwesome, Feather, Entypo, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ola mundo, icons para aplicativos</Text>
      <AntDesign
        name={"home"}
        size={54}
        color={'#5A9BDC'}
      />

      <Feather
        name={"user"}
        size={54}
        color={"#A17ADB"}
      />
       <Entypo
          name={"youtube"}
          size={54}
          color={'#FF0000'}
        />

      <TouchableOpacity style={styles.areaYoutube}>
        <FontAwesome
          name={"youtube"}
          size={54}
          color={'#FFF'}
        />
        <Text style={styles.btnText}> Acessar canal </Text>
      </TouchableOpacity>

      <Ionicons name='open' size={54} color={'#DC2A35'}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 15
  },
  btnText: {
    fontSize:20,
    paddingLeft: 10,
    color: '#FFF'
  }
});
