import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Text style={style.title}>BIBLIOTECA ESCOLAR</Text>
            
            <Image style={style.img} source={{uri:'https://hips.hearstapps.com/hmg-prod/images/traditional-wooden-steps-in-vintage-library-royalty-free-image-1666591817.jpg'}}/>

            {/* Botones con íconos */}
            <TouchableOpacity style={style.card} onPress={() => navigation.navigate('Libros')}>
                <Ionicons name="book" size={24} color="#fff" style={{marginRight: 10}} />
                <Text style={style.cardText}>Ver Libros</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.card} onPress={() => navigation.navigate('Listadealumnos')}>
                <Ionicons name="people" size={24} color="#fff" style={{marginRight: 10}} />
                <Text style={style.cardText}>Lista de Alumnos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.card} onPress={() => navigation.navigate('Registraralumnos')}>
                <Ionicons name="person-add" size={24} color="#fff" style={{marginRight: 10}} />
                <Text style={style.cardText}>Registrar Alumno</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#ffbb9bff',
    },
    title: { 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 20, 
    },
    card: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c16f34ff', 
        padding: 20, 
        marginVertical: 10, 
        borderRadius: 10, 
        width: '70%',
    },
    cardText: { 
        color: '#fff', 
        fontSize: 18,
    },
    img:{
        width: '50%',
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
    },
});
