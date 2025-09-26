import React, { useState } from 'react';
import { 
  Platform, StatusBar, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, Alert, View 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

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

    const numero = Number(numeroControl);
    if (isNaN(numero) || numero <= 0) {
      Alert.alert("Error", "Número de control inválido");
      return;
    }

    const alumno = {
      nombre,
      carrera,
      libro,
      numero_control: numero
    };

    try {
      const response = await fetch('http://192.168.1.68:3000/biblioteca', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alumno)
      });

      const data = await response.json();

      if (response.ok) {
        const mensaje = typeof data.message === "string" ? data.message : JSON.stringify(data.message);
        Alert.alert("Éxito", mensaje);
        navigation.navigate('Listadealumnos', { 
          nuevoAlumno: { ...alumno, matricula: numeroControl } 
        });
      } else {
        const mensajeError = typeof data.error === "string" ? data.error : JSON.stringify(data.error);
        Alert.alert("Error", mensajeError);
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

      {/* Nombre */}
      <View style={style.inputContainer}>
        <Ionicons name="person" size={20} color="#aaa" style={{marginRight: 8}} />
        <TextInput
          style={style.input}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#999"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      {/* Carrera */}
      <View style={style.inputContainer}>
        <Ionicons name="school" size={20} color="#aaa" style={{marginRight: 8}} />
        <TextInput
          style={style.input}
          placeholder="Escribe tu carrera"
          placeholderTextColor="#999"
          value={carrera}
          onChangeText={setCarrera}
        />
      </View>

      {/* Libro */}
      <View style={[style.inputContainer, style.textArea]}>
        <Ionicons name="book" size={20} color="#aaa" style={{marginRight: 8, marginTop: 8}} />
        <TextInput
          multiline
          numberOfLines={4}
          style={[style.input, {height: 90}]}
          placeholder="Escribe el nombre del libro"
          placeholderTextColor="#999"
          value={libro}
          onChangeText={setLibro}
        />
      </View>

      {/* Número de control */}
      <View style={style.inputContainer}>
        <Ionicons name="barcode" size={20} color="#aaa" style={{marginRight: 8}} />
        <TextInput
          style={style.input}
          placeholder="123456"
          placeholderTextColor="#999"
          keyboardType="numeric"
          maxLength={10}
          value={numeroControl}
          onChangeText={text => setNumeroControl(text.replace(/[^0-9]/g, ''))}
        />
      </View>

      {/* Botón Guardar */}
      <TouchableOpacity style={style.botonConIcono} onPress={handleGuardar} activeOpacity={0.7}>
        <Ionicons name="save" size={20} color={'#fff'} style={style.iconoIzquierda} />
        <Text style={style.textoBoton}>Guardar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#fff8f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333'
  },
  textArea: {
    alignItems: 'flex-start'
  },
  botonConIcono: {
    backgroundColor: '#f4a261',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  iconoIzquierda: {
    marginRight: 10
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  backButton: {
    height: 40,
    width: 40,
    marginBottom: 20
  }
});
