import React from 'react';
import { Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import LightsList from '../components/LightsList';

export default class HomePage extends React.Component {
  render() {
   const actions = [
      {
        text: 'Adicionar dispositivo',      
        name: 'btnNovoDispositivo',
        position: 2
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>Listagem dispositivos</Text>
          <LightsList />
        </ScrollView>
        <FloatingAction
          actions={actions}
          onPressItem={() => this.btnNovoDispositivo()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff'
   }
 });