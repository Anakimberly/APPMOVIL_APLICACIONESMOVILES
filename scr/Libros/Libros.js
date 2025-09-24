import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Libros( ) {
    return (
        <View style={style.card}>  
            <Image style = {style.img} source={{uri:'https://online.fliphtml5.com/ilypf/stri/files/large/1.webp?1601836779&1601836779'}}/>
            <View style={style.card_contenido}>
                <Text style={style.titulo}>El principito</Text>
                
                {/* Boto*/}
                        <TouchableOpacity style={style.botonSombreado}>
                        <Text style={style.textoBoton}> Sombra </Text>
                        </TouchableOpacity>
            </View>
            <Image style = {style.img} source={{uri:'https://wmagazin.com/wp-content/uploads/2024/12/Portadas.2024-mejores-bonitas-pinocho-collodi-WMagazin-e1735465749152.jpg'}}/>
            <View style={style.card_contenido}>
                <Text style={style.titulo}>El principito</Text>
                
                {/* Boton sombreado*/}
                        <TouchableOpacity style={style.botonSombreado}>
                        <Text style={style.textoBoton}> Sombra </Text>
                        </TouchableOpacity>
            </View>
        
    <Image style = {style.img} source={{uri:'https://www.el-ilustrador.com/wp-content/uploads/2024/11/Cronicas-de-Narnia-de-C.S.-Lewis.-Ilustracion-portada-de-Pauline-Baynes.jpg'}}/>
            <View style={style.card_contenido}>
                <Text style={style.titulo}>El principito</Text>
                
                {/* Boton sombreado*/}
                        <TouchableOpacity style={style.botonSombreado}>
                        <Text style={style.textoBoton}> Sombra </Text>
                        </TouchableOpacity>
        </View>
        <Image style = {style.img} source={{uri:'https://online.fliphtml5.com/ilypf/stri/files/large/1.webp?1601836779&1601836779'}}/>
            <View style={style.card_contenido}>
                <Text style={style.titulo}>El principito</Text>
                
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
        backgroundColor: '#b8d3ebff',
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