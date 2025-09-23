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
