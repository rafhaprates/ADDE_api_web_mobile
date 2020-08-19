import React from 'react';
import { View, StyleSheet } from 'react-native';


const Cartao = (props) => {
  return (
      <View style={{...estilos.cartao, ...props.estilos}}>
        {props.children}
      </View>
  );
};

const estilos = StyleSheet.create({
    cartao: {
        alignItems: 'center',
        elevation: 4,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 2,
        borderColor: '#BB96F3'
    }
});


export default Cartao;