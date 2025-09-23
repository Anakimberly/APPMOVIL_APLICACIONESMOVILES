import{ View, Text, StatusBar, Platform,StyleSheet,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";

export const Listadealumnos = () => {
    return (
        <SafeAreaView style={style.mainS}>
            {/* inicio de AppBar */}
            <View style={style.appBar}>
                <Ionicons name="arrow-back" size={30} color={'#000000ff'} />
                <Text style={style.appBarTitle}>Lista de Usuarios</Text>
                <View style={{width:20 }}></View>
                </View>
            {/* fin de AppBar */}
            {/* Inicio de contenido (lista de alumnos)*/}
            <ScrollView style={{padding:16}}>
                <Text style={style.sectionTilte}>Alumnos de Aplicaciones Moviles </Text>
                {[1,2,3,4,5,6,7].map((item, index) => (
                    <View style={style.card}>
                 <Image source={{ uri: 'https://i.pinimg.com/474x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg'}} style={style.avatar} />
                <View style={style.cardinfo}>
                    <Text style={style.userName}>Ana Kimberly</Text>
                 <Text style={style.userDetails}>Ing. Sistemas Computacionales</Text>
                 <TouchableOpacity style={style.saveButton}>
                    <Text style={style.saveButtonText}> Ver mas</Text>

                 </TouchableOpacity>
                </View>
                </View>

                ))}

            </ScrollView>
            {/* cierre de contenido (lista de alumnos)*/}
            {/* navbar*/}
            <View style={style.navbar}>
                <View style={style.navItem}>
                    <Ionicons name="home" size={24} color={'#000000ff'} />
                    <Text style={style.navText}> Inicio</Text>
                </View>
                <View style={style.navItem}>
                    <Ionicons name="save" size={24} color={'#000000ff'} />
                    <Text style={style.navText}> Guardar</Text>
                </View>
                <View style={style.navItem}>
                    <Ionicons name="person" size={24} color={'#000000ff'} />
                    <Text style={style.navText}> Usuario</Text>
                </View>
                </View>
            {/* fin de navbar */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({ 
 mainS:{
        flex:1,
        backgroundColor:'#b4aee9ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:44,
        // padding: 50
    },
    appBar:{
        height:50,
        width:'100%',
        backgroundColor:'#ffffffff',
        flexDirection:'row',
        alignItems:'center',
         justifyContent:'space-between',
        paddingHorizontal:16,
        
       

    },
    appBarTitle:{
        fontWeight:'bold',
        fontSize:16,
    },
    sectionTilte:{
        fontSize:15,
        fontWeight:'bold',
        padding:16,
        
    },
    card:{
        padding:16,
        flexDirection:'row',
        backgroundColor:'#ffffffff',
       borderRadius:16,
       elevation:2,
         marginBottom:5,
    },
    avatar:{
         width:60 ,
      height : 60,
        borderRadius: 50,
      borderColor: '#ccc',
      marginRight:12,
    },
    cardinfo:{
        flex:1,
        justifyContent:'center',
    },
    userName:{
        fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
     
    },
    userDetails:{
       fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    saveButton:{
        backgroundColor: '#dad5e9ff',
        marginTop:10,
        padding:10,
        alignSelf:'flex-end',
        paddingVertical:6,
        borderRadius:15,
       
    },
    saveButtonText:{
        color: '#000000ff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    navbar:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        height:70,
        backgroundColor:'#ffffffff',
        borderTopWidth:1,
        // marginBottom:10,
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