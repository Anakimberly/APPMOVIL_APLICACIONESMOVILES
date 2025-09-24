import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Libros( ) {
    return (
        <View style={style.card}>  
            <Image style = {style.img} source={{uri:'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp'}}/>
            <View style={style.card_contenido}>
                <Text style={style.titulo}>Card de img</Text>
                <Text style={style.contenido}>Contenido del Card</Text>
                {/* Boton sombreado*/}
                        <TouchableOpacity style={style.botonSombreado}>
                        <Text style={style.textoBoton}> Sombra </Text>
                        </TouchableOpacity>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    card:{
        backgroundColor: '#ffffffff',
        //padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#f9e2feff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        overflow: 'hidden',
        shadowOffset:{ width: 0, height: 3}
    },
    titulo:{
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido:{
        marginTop:4,
        fontSize:12,
        color: '#333333'
    },
    img:{
        width: '100%',
        height: 120,
        //borderRadius: 10,
    },
    card_contenido:{
        padding: 16,
        //backgroundColor: '#ffffffff',
    },
    botonSombreado:{
        marginTop:10,
        backgroundColor: '#b2b2c5ff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius:15,
        alignSelf: 'flex-start',
        //marginBottom: 15,
    },
    textoBoton:{
        fontSize: 12,
        fontWeight: 'bold',
    }
})