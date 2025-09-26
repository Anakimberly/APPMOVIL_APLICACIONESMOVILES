 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
// //import BotonCambio from './scr/Boton/Botoncambio';
  import Home from './scr/Pantalladeinicio/Home';
  import  Listadealumnos from './scr/Listadealumnos/Listadealumnos';
 import Libros from './scr/Libros/Libros';
import Registraralumnos from './scr/Registroalumnos/Registraralumnos';

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    //<BotonCambio/>
    //<Home/>
    //<Listadealumnos />
     //<Libros/>
     //<Registraralumnos/>

      <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="Listadealumnos" component={Listadealumnos} options={{ title: '' }} />
      <Stack.Screen name="Libros" component={Libros} options={{ title: 'LIBROS' }} />
      <Stack.Screen name="Registraralumnos" component={Registraralumnos} options={{ title: '' }} />
     </Stack.Navigator>
     </NavigationContainer>
  );
   
}
