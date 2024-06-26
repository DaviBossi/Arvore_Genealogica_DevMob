import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './src/Screens/Inicio';
import Escolha from './src/Screens/Escolha';
import Visualizar from './src/Screens/Visualizar';
import Cadastro from './src/Screens/Cadastro';
import UsuarioProvider from './src/UsuarioContext';
import { Pressable } from 'react-native';
import { Icon } from '@rneui/base';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UsuarioProvider>
        <Stack.Navigator>
          <Stack.Screen name='Inicio' component={Inicio} options={{ headerShown: false }} />
          <Stack.Screen name='Escolha' component={Escolha} options={({ navigation }) => {
              return {
                headerRight:
                  () => <Pressable onPress={() => navigation.navigate("Cadastro", { item: {id: ""} } )}>
                    <Icon name='add' size={25} color='black' />
                  </Pressable>,
                statusBarColor: 'lightgray',
                headerStyle: { backgroundColor: 'lightblue' },
                title: "Familias"
              }
            }} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={() => {
              return {
                statusBarColor: 'lightgray',
                headerStyle: { backgroundColor: 'lightblue' },
                title: "Membros da Familia"
              }
            }}/>
            <Stack.Screen name='Visualizar' component={Visualizar} options={({ navigation }) => {
              return {
                headerRight:
                  () => <Pressable onPress={() => navigation.navigate("Cadastro", { item: {id: ""} } )}>
                    <Icon name='add' size={25} color='black' />
                  </Pressable>,
                statusBarColor: 'lightgray',
                headerStyle: { backgroundColor: 'lightblue' },
                title: "Árvore Genealógica"
              }
            }} />
        </Stack.Navigator>
      </UsuarioProvider>
    </NavigationContainer>
  )
}