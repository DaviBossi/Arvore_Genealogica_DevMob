import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    // Tela Inicial
    back_ground: {
        flex: 1,
        backgroundColor: 'white',
    },

    texto_Inicio: {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: 'bold',
        paddingTop: 200,
        color: 'black'
    },

    buttonContainer: {
        position: 'absolute',
        top: 400,
        alignSelf: 'center',
    },

    button: {
        backgroundColor: 'lightblue',
        borderRadius: 50,
        paddingVertical: 25,
        paddingHorizontal: 60,
    },

    // Tela de Escolha
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    // Visualizar 
    colunas_arvore: {
        justifyContent: 'space-between'
    },
    linhas_arvore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    box: {
        width: 80,
        height: 70,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    verticalLine: {
        width: 1,
        height: 100,
        backgroundColor: '#000',
        position: 'absolute'
    },
    horizontalLine: {
        width: 113,
        height: 1,
        backgroundColor: '#000',
        position: 'absolute'
    },

    //Cadastro
    inputs: {
        height: 40,
        width: 300,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,
        alignSelf: 'center'
    },
    inputs_text:{
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 55
    },
    buttonDeletar: {
        position: 'absolute',
        top: 590,
        alignSelf: 'center',
    },
    buttonCadastro: {
        backgroundColor: 'lightblue',
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 140,
    },
    buttonGravar: {
        position: 'absolute',
        top: 510,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    
});

export default styles;