import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Listadealumnos() {
  const route = useRoute();
  const [alumnos, setAlumnos] = useState([]);

  // Agregar alumno recibido por params
  useEffect(() => {
    if (route.params?.nuevoAlumno) {
      setAlumnos(prev => [...prev, route.params.nuevoAlumno]);
    }
  }, [route.params?.nuevoAlumno]);

  // Cargar alumnos desde la API
  const cargarAlumnos = async () => {
    try {
      const response = await fetch('http://192.168.1.68:3000/biblioteca');
      if (!response.ok) throw new Error("Error al cargar alumnos");
      const data = await response.json();
      setAlumnos(data);
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "No se pudieron cargar los alumnos");
    }
  };

  useEffect(() => {
    cargarAlumnos();
  }, []);

  // Función para eliminar alumno
  const handleEliminar = async (id) => {
    try {
      const idLimpio = encodeURIComponent(String(id).trim());

      const confirmar = await new Promise((resolve) => {
        Alert.alert(
          "Eliminar alumno",
          "¿Seguro que quieres eliminar este alumno?",
          [
            { text: "Cancelar", style: "cancel", onPress: () => resolve(false) },
            { text: "Eliminar", style: "destructive", onPress: () => resolve(true) }
          ]
        );
      });

      if (!confirmar) return;

      const res = await fetch(`http://192.168.1.68:3000/biblioteca/${idLimpio}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Error al eliminar");
      }

      setAlumnos(prev => prev.filter(alumno => Number(alumno.id) !== Number(idLimpio)));

      Alert.alert("Éxito", "Alumno eliminado correctamente");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", err.message || "No se pudo eliminar el alumno");
    }
  };

  return (
    <SafeAreaView style={style.mainS}>
      <Text style={style.appBarTitle}>ALUMNOS REGISTRADOS</Text>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 32 }}>
        {alumnos.length === 0 ? (
          <Text style={style.emptyText}>No hay alumnos registrados</Text>
        ) : (
          alumnos.map((alumno) => (
            <View key={alumno.id} style={style.card}>
              <View style={style.cardInfo}>
                <Text style={style.userName}>{alumno.nombre}</Text>
                <Text style={style.userDetails}>{alumno.carrera}</Text>
                <Text style={style.userDetails}>Control: {alumno.numero_control}</Text>
                {alumno.libro ? <Text style={style.userDetails}>Libro: {alumno.libro}</Text> : null}
              </View>

              <TouchableOpacity 
                onPress={() => handleEliminar(alumno.id)} 
                style={style.botonConIcono} 
                activeOpacity={0.7}
              >
                <Ionicons name="trash" size={22} color={'#d9534f'} />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: "#fff5ee",
  },
  appBarTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: '#333'
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 40
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffe4c4",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  cardInfo: {
    flex: 1
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  userDetails: {
    fontSize: 14,
    color: '#555'
  },
  botonConIcono: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3
  }
});
