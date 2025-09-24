import React, { useState } from 'react';

import { View, Text, StatusBar, Platform, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Listadealumnos = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const alumnos = [
    { nombre: 'Ana Kimberly', carrera: 'Ing. Sistemas Computacionales', matricula: '22620053', grupo: '7BS', avatar: 'https://w7.pngwing.com/pngs/298/171/png-transparent-avatar-face-girl-female-woman-profile-happy-avatar-icon.png' },
    { nombre: 'Brenda Silva', carrera: 'Lic. Administracion', matricula: '22620053', grupo: '7BA', avatar: 'https://i0.wp.com/www.mascarilla.org/wp-content/uploads/2020/06/C%C3%B3mo-Crear-mi-Avatar-de-Facebook-Te-Explicamos-Paso-a-Paso-2.jpg?fit=253%2C283&ssl=1' },
    { nombre: 'Raul Hernandez', carrera: 'Lic.Arquitectura', matricula: '22620053', grupo: '7BA', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' },
    { nombre: 'Dalila Fernandez', carrera: 'Ing. Gestion Empresarial', matricula: '22620053', grupo: '7BG', avatar: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_423682103.jpg' },
    { nombre: 'Romina Santiago', carrera: 'Ing. Mecatronica', matricula: '22620053', grupo: '7UM', avatar: 'https://i.pinimg.com/236x/56/77/62/5677627c338956d1cb9bbdb7f49ae79e.jpg' },
    { nombre: 'Sergio Gomez', carrera: 'Ing. Civil', matricula: '22620053', grupo: '7BA', avatar: 'https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg' },
    { nombre: 'Ameli Reyes', carrera: 'Ing. Sistemas Computacionales', matricula: '22620053', grupo: '7BS', avatar: 'https://c0.klipartz.com/pngpicture/517/749/gratis-png-equipo-iconos-usuario-perfil-avatar-mujer-joven-thumbnail.png' },
     { nombre: 'Ameli Reyes', carrera: 'Ing. Sistemas Computacionales', matricula: '22620053', grupo: '7BS', avatar: 'https://c0.klipartz.com/pngpicture/517/749/gratis-png-equipo-iconos-usuario-perfil-avatar-mujer-joven-thumbnail.png' },

  ];

  return (
    <SafeAreaView style={style.mainS}>
      {/* AppBar */}
      <View style={style.appBar}>
       
        <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}> 
        {/* <Ionicons name="arrow-back" size={30} color={'#ffffffff'} /> */}
        </TouchableOpacity>
        <Text style={style.appBarTitle}>ALUMNOS REGISTRADOS</Text>
        <View style={{ width: 20 }}></View>
      </View>

      {/* Lista de Alumnos */}
      <ScrollView style={{ padding: 16 }}>
        {alumnos.map((alumno, index) => (
          <View key={index} style={style.card}>
            <Image source={{ uri: alumno.avatar }} style={style.avatar} />
            <View style={style.cardinfo}>
              <Text style={style.userName}>{alumno.nombre}</Text>

              {expandedIndex === index && (
                <>
                  <Text style={style.userDetails}>{alumno.carrera}</Text>
                  <Text style={style.userDetails}>{alumno.matricula}</Text>
                  <Text style={style.userDetails}>{alumno.grupo}</Text>
                </>
              )}

              <TouchableOpacity
                style={style.saveButton}
                onPress={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <Text style={style.saveButtonText}>
                  {expandedIndex === index ? 'Ver menos' : 'Ver más'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

     
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainS: {
    flex: 1,
    backgroundColor: '#b27f53ff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  appBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#e7c5a1ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  appBarTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#e2bea5ff',
    borderRadius: 16,
    elevation: 2,
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#ccc',
    marginRight: 12,
  },
  cardinfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#dad5e9ff',
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  saveButtonText: {
    color: '#000000ff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#dec2a1ff',
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#000000ff',
    marginTop: 4,
  },
});
