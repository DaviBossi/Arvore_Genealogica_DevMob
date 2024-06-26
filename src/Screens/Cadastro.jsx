import { View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UsuarioContext } from '../UsuarioContext'
import styles from '../Styles';
import { Text } from '@rneui/base';

export default function Cadastro(props) {
    const { id, setId, voce, setVoce, pai, setPai, mae, setMae, avo_paterno, setAvo_Paterno, ava_paterno, setAva_Paterno, ava_materno, setAva_Materno, avo_materno, setAvo_Materno, gravarDados } = useContext(UsuarioContext);

    useEffect(() => {
        const { item } = props.route.params;
        if (props.route.params.item.id == "") {
            setId("");
            setVoce("");
            setPai("");
            setMae("");
            setAvo_Paterno("");
            setAva_Paterno("");
            setAvo_Materno("");
            setAva_Materno("");
            console.log("setou id vazio");
        } else {
            setId(item.id.toString());
            setVoce(item.voce);
            setPai(item.pai);
            setMae(item.mae);
            setAvo_Paterno(item.avo_paterno);
            setAva_Paterno(item.ava_paterno);
            setAvo_Materno(item.avo_materno);
            setAva_Materno(item.ava_materno);
            console.log("setou id");
        }
    }, [])
    return (
        <View>
            <Text style={styles.inputs_text}>Você:</Text>
            <TextInput
                style={styles.inputs}
                placeholder='                                   Você'
                value={voce}
                onChangeText={setVoce}
            />
            <Text style={styles.inputs_text}>Pai:</Text>
            <TextInput
                style={styles.inputs}

                placeholder='                                    Pai'
                value={pai}
                onChangeText={setPai}
            />
            <Text style={styles.inputs_text}>Mãe:</Text>
            <TextInput
                style={styles.inputs}
                placeholder='                                   Mãe'
                value={mae}
                onChangeText={setMae}
            />
            <Text style={styles.inputs_text}>Avô Paterno:</Text>
            <TextInput
                style={styles.inputs}
                placeholder='                             Avô Paterno'
                value={avo_paterno}
                onChangeText={setAvo_Paterno}
            />
            <Text style={styles.inputs_text}>Avó Paterna:</Text>
            <TextInput
                style={styles.inputs}
                placeholder='                             Avó Paterna'
                value={ava_paterno}
                onChangeText={setAva_Paterno}
            />
            <Text style={styles.inputs_text}>Avô Materno:</Text>
            <TextInput
                style={styles.inputs}
                placeholder='                             Avô Materno'
                value={avo_materno}
                onChangeText={setAvo_Materno}
            />
            <Text style={styles.inputs_text}>Avó Materna:</Text>
            <TextInput
                style={styles.inputs}
                placeholder='                             Avó Materna'
                value={ava_materno}
                onChangeText={setAva_Materno}
            />
            <View style={styles.buttonDeletar}>
                <TouchableOpacity style={styles.buttonCadastro} onPress={() => props.navigation.goBack()}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonGravar}>
                <TouchableOpacity style={styles.buttonCadastro} onPress={() => { gravarDados(); props.navigation.goBack() }}>
                    <Text style={styles.buttonText}>Gravar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
// onPress={() => { gravarDados(); props.navigation.goBack() }}