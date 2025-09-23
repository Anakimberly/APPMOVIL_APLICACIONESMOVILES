import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import BotonCambio from './scr/Boton/Botoncambio';
//import Home from './scr/Pantalladeinicio/Home';
import { Listadealumnos } from './scr/Listadealumnos/Listadealumnos';
export default function App() {

  return (
    //<BotonCambio/>
    //<Home/>
    //<Listadealumnos />

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ListaAlumnos" component={Listadealumnos} options={{ title: 'Alumnos Registrados' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
   
}
