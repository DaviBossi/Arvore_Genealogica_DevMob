import { Alert, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { UsuarioContext } from '../UsuarioContext';
import styles from '../Styles';
import { useNavigation } from '@react-navigation/native';

export default function Escolha() {

    const { familias, buscarFamilias, atualizacao, apagarFamilia} = useContext(UsuarioContext);

    const navigation = useNavigation();


    useEffect(() => { buscarFamilias(); }, []);
    return (
        <SafeAreaView>
            <FlatList
                data={familias}
                extraData={atualizacao}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListItem bottomDivider>
                            <ListItem.Content style={styles.item}>
                                <View>
                                <TouchableOpacity onPress={() => navigation.navigate("Visualizar",{item})}>
                                    <ListItem.Title style={{fontSize: 20}}>{item.voce} {" "}</ListItem.Title>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: 100 }}>
                                    <ListItem.ButtonGroup 
                                        buttons={[
                                            <Icon name='edit' size={20} color={'blue'} onPress={() => navigation.navigate("Cadastro", { item})}/>,
                                            <Icon name='trash-can' size={20} color={'red'} onPress={() => apagarFamilia(item.id)} />
                                        ]}
                                    />
                                </View>
                            </ListItem.Content>
                    </ListItem>
                )}
            >
            </FlatList>
        </SafeAreaView>
    )
}