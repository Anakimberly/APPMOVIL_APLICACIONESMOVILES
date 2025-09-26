  import { Platform, StatusBar, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Registraralumnos({ navigation }) {

  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [libro, setLibro] = useState('');
  const [numeroControl, setNumeroControl] = useState('');

  const handleGuardar = async () => {
    if (!nombre || !carrera || !libro || !numeroControl) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const alumno = { nombre, carrera, libro, numeroControl };

    try {
      const response = await fetch('http://192.168.1.68:3000/biblioteca', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alumno)
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Éxito", data.message);
        navigation.navigate('Listadealumnos', { nuevoAlumno: { ...alumno, matricula: numeroControl } });
      } else {
        Alert.alert("Error", data.error);
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo conectar con el servidor");
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={style.mainS}> 
      <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}></TouchableOpacity>
      <Text style={style.title}>REGISTRO DE ALUMNOS</Text>

      <Text style={style.label}>Nombre:</Text>
      <TextInput style={style.input} placeholder="Escribe tu nombre"
       value={nombre} onChangeText={setNombre}/> 

      <Text style={style.label}>Carrera:</Text>
      <TextInput editable={true} style={style.input} placeholder="Escribe tu carrera" 
      value={carrera} onChangeText={setCarrera}/> 

      <Text style={style.label}>Libro Adquirido:</Text>
      <TextInput multiline={true} numberOfLines={4} style={[style.input, style.textArea]} 
      placeholder="Escribe el nombre del libro" value={libro} onChangeText={setLibro}/> 

      <Text style={style.label}>Numero de control:</Text>
      <TextInput style={style.input} placeholder="123456" keyboardType="numeric"
       value={numeroControl} onChangeText={setNumeroControl}/>   

      
      <TouchableOpacity style={style.botonConIcono} onPress={handleGuardar}>
        <Ionicons name="save" size={20} color={'#000000ff'} style={style.iconoIzquierda}/>
        <Text style={style.textoBoton}>Guardar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainS:{
    flex:1,
    backgroundColor: '#fcfcfcff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    padding: 16
  },
  title:{
    paddingTop:30,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign:'center'
  },
  label:{
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:10
  },
  input:{
    borderWidth:1,
    borderColor:'#aaa',
    borderRadius:10,
    padding: 8
  },
  textArea:{
    height:100,
    textAlignVertical:'top'
  },
  botonConIcono:{
    backgroundColor: '#c6c6c6ff',
    marginTop:10,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    paddingVertical:12,
    borderRadius:15
  },
  iconoIzquierda:{
    marginRight:10
  },
  textoBoton:{
    color: '#000000ff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
