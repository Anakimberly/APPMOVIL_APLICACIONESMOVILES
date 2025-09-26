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

      // Confirmación
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

      // Llamada DELETE
      const res = await fetch(`http://192.168.1.68:3000/biblioteca/${idLimpio}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' }
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Error al eliminar");
      }

      // Actualizar lista local
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
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {alumnos.length === 0 ? (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>No hay alumnos registrados</Text>
        ) : (
          alumnos.map((alumno) => (
            <View key={alumno.id} style={style.card}>
              <View style={style.cardinfo}>
                <Text style={style.userName}>{alumno.nombre}</Text>
                <Text style={style.userDetails}>{alumno.carrera}</Text>
                <Text style={style.userDetails}>{alumno.numero_control}</Text>
                {alumno.libro ? <Text style={style.userDetails}>Libro: {alumno.libro}</Text> : null}
              </View>

              {/* Botón eliminar */}
              <TouchableOpacity onPress={() => handleEliminar(alumno.id)} style={style.botonConIcono}>
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
    backgroundColor: "#fae1c7ff",
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f1c796ff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardinfo: {
    flex: 1
  },
  botonConIcono: {
    padding: 8
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  userDetails: {
    fontSize: 14,
    color: '#333'
  }
});
