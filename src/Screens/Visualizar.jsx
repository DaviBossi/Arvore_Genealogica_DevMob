import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UsuarioContext } from '../UsuarioContext'
import styles from '../Styles'

export default function Visualizar(props) {
    const {voce, setVoce, pai, setPai, mae, setMae, avo_paterno, setAvo_Paterno, ava_paterno, setAva_Paterno, ava_materno, setAva_Materno, avo_materno, setAvo_Materno } = useContext(UsuarioContext);

    useEffect (() => {
        const {item} = props.route.params;
            setVoce(item.voce);
            setPai(item.pai);
            setMae(item.mae);
            setAvo_Paterno(item.avo_paterno);
            setAva_Paterno(item.ava_paterno);
            setAvo_Materno(item.avo_materno);
            setAva_Materno(item.ava_materno);
        
    },[])

    return (
        <View>
            <View style={[styles.horizontalLine , {width: 20,top: 140,left: 90}]}/>
            <View style={[styles.horizontalLine , {width: 20,top: 140,left: 290}]}/>
            <View style={[styles.verticalLine, {top: 140, left:100}]}/>
            <View style={[styles.verticalLine, {top: 140, left:300}]}/>
            <View style={[styles.horizontalLine , {top: 275,left:140}]}/>
            <View style={[styles.verticalLine, {top: 275, left:200}]}/>
            <View style={styles.colunas_arvore}>
                <View style={[styles.linhas_arvore, {paddingTop: 100}]}>
                    <View style={styles.box}>
                    <Text style={{textAlign: 'center'}}> {avo_paterno}</Text>
                    </View>
                    <View style={styles.box}>
                    <Text style={{textAlign: 'center'}}> {ava_paterno}</Text>
                    </View>
                    <View style={styles.box}>
                    <Text style={{textAlign: 'center'}}> {avo_materno}</Text>
                    </View>
                    <View style={styles.box}>
                    <Text style={{textAlign: 'center'}}> {ava_materno}</Text>
                    </View>
                </View>
                <View style={[styles.linhas_arvore,{paddingLeft: 50,paddingRight: 50, paddingTop: 70}]}>
                <View style={styles.box}>
                <Text style={{textAlign: 'center'}}> {pai}</Text>
                    </View>
                    <View style={styles.box}>
                    <Text style={{textAlign: 'center'}}> {mae}</Text>
                    </View>
                </View>
                <View style={[styles.linhas_arvore, {paddingTop: 65, alignSelf: 'center'}]}>
                <View style={styles.box}>
                <Text style={{textAlign: 'center'}}> {voce}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}