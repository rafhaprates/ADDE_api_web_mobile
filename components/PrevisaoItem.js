import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';


const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                <View>
                    <View style={estilos.primeiraLinha}>
                        <Image
                            style={estilos.imagemDia}
                            source={{ uri: 'https://openweathermap.org/img/wn/01d.png' }}
                        />
                        <Text style={estilos.titulo}>Data - {new Date(props.previsao.dt * 1000).toLocaleDateString()}
                        </Text>
                        <Image
                            style={estilos.imagemNoite}
                            source={{ uri: 'https://openweathermap.org/img/wn/01n.png' }}
                        />
                    </View>
                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>
                            {'Nascer do sol - ' + new Date(props.previsao.sunrise * 1000).toLocaleTimeString()}
                        </Text>
                        <Text style={estilos.valor}>
                            {'| Pôr do sol - ' + new Date(props.previsao.sunset * 1000).toLocaleTimeString()}</Text>
                    </View>
                    <View style={estilos.feelsLikeLinha}>
                        <Text>
                            {'Manhã = ' + props.previsao.feels_like.morn + '°C'}</Text>
                        <Text>
                            {'Dia = ' + props.previsao.feels_like.day + '°C'}</Text>
                        <Text>
                            {'Tarde = ' + props.previsao.feels_like.eve + '°C'}</Text>
                        <Text>
                            {'Noite = ' + props.previsao.feels_like.night + '°C'}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 16,
        paddingTop: 10
    },
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagemDia: {
        width: 50,
        height: 50,
        alignContent: "flex-start"
    },
    imagemNoite: {
        width: 50,
        height: 50,
        alignContent: "flex-end"
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    feelsLikeLinha: {
        borderBottomWidth: 3,
        borderBottomColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
});


export default PrevisaoItem;