import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

  return (
    

    <View style={style.container}>
      <Text style={style.title}>Biblioteca Escolar</Text>
       <Image style = {style.img} source={{uri:'https://hips.hearstapps.com/hmg-prod/images/traditional-wooden-steps-in-vintage-library-royalty-free-image-1666591817.jpg?crop=0.6763xw:1xh;center,top&resize=640:*'}}/>

      <TouchableOpacity style={style.card}>
        <Text style={style.cardText}>Ver Libros</Text>
      </TouchableOpacity>

      <TouchableOpacity 
  style={style.card} 
  onPress={() => navigation.navigate('ListaAlumnos')}
>
  <Text style={style.cardText}>Lista de Alumnos</Text>
</TouchableOpacity>


      <TouchableOpacity style={style.card}>
        <Text style={style.cardText}>Registrar Alumno</Text>
      </TouchableOpacity>

       {/* navbar*/}
            <View style={style.navbar}>
                <View style={style.navItem}>
                    <Ionicons name="home" size={24} color={'#000000ff'} />
                    <Text style={style.navText}> Inicio</Text>
                </View>
                
                <View style={style.navItem}>
                    <Ionicons name="person" size={24} color={'#000000ff'} />
                    <Text style={style.navText}> Usuario</Text>
                </View>
                </View>
            {/* fin de navbar */}
            
    </View>
  
  
  )
}

const style = StyleSheet.create({
    
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffbb9bff' ,
    

  },
  title: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    
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
  },
  img:{
        width: '50%',
        height: 120,
        borderRadius: 10,
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:70,
        width:'100%',
        backgroundColor:'#fcdabbff',
        borderTopWidth:1,
        position: 'absolute',   
        bottom: 0 
         
    },
     
    navItem:{
        alignItems:'center',
    },
    navText:{
        fontSize:12,
        color:'#000000ff',
        marginTop:4,
    },
});
