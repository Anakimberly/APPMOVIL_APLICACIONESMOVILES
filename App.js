import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import BotonCambio from './scr/Boton/Botoncambio';
import Home from './scr/Pantalladeinicio/Home';
import { Listadealumnos } from './scr/Listadealumnos/Listadealumnos';
//import Libros from './scr/Listalibros/Libros';

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    //<BotonCambio/>
    //<Home/>
    //<Listadealumnos />
     //<Libros/>

     <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
     <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
     <Stack.Screen name="Listadealumnos" component={Listadealumnos} options={{ title: 'Lista de alumnos' }} />
   </Stack.Navigator>
    </NavigationContainer>
  );
   
}
