import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home() {
  return (
    

    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca Escolar</Text>
       <Image style = {style.img} source={{uri:'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp'}}/>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Ver Libros</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Lista de Alumnos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Registrar Alumno</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffbb9bff' 
  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  card: { 
    backgroundColor: '#c16f34ff', 
    padding: 20, 
    marginVertical: 10, 
    borderRadius: 10, 
    width: '70%' 
  },
  cardText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 18 
  }
});
