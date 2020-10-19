import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const LightsList = props => {
  const devices = ['Lampada','lampada cozinha 222222','lampada 222'];

  const retorno = devices.map(device => {    
    return (
      <View style={styles.container} key={device}>        
        <Text style={[styles.default, styles.nome]}>{device}</Text>
        <Switch />
      </View>
    );
  });

  return <View>{retorno}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    borderStyle: 'solid'
  },
  default:{
    padding: 20,
  },
  id: {
    flex: 0.1,
    textAlign: 'center'
  },
  nome: {
    flex: 0.9
  }
});

export default LightsList;
