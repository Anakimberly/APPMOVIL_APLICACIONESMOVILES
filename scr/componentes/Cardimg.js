import { StyleSheet, View, Text, Image } from "react-native";

export default function CardImg( ) {
    return (
        <View style={style.card}>  
            <Image style = {style.img} source={{uri:'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9db5/live/48fd9010-c1c1-11ee-9519-97453607d43e.jpg.webp'}}/>
            <Text style={style.titulo}>Card de img</Text>
            <Text style={style.contenido}>Contenido del Card</Text>
        </View>
    );
}
const style = StyleSheet.create({
    card:{
        backgroundColor: '#ffffffff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#f9e2feff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    titulo:{
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold',
    },
    contenido:{
        marginTop:4,
    },
    img:{
        width: '100%',
        height: 120,
        borderRadius: 10,
    }
})