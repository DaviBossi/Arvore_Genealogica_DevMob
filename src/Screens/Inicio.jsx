import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../Styles';
import { useNavigation } from '@react-navigation/native'

export default function Inicio() {

    const navigation = useNavigation();
    return (
        <View style={styles.back_ground}>
            <Text style={styles.texto_Inicio}>Genealogy App</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Escolha')}>
                    <Text style={{color: 'black', fontSize: 20}}>Começar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}