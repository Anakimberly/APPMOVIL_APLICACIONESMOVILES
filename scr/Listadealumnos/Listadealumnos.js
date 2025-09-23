import{ View, Text, StatusBar, Platform,StyleSheet,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";

export const Listadealumnos = () => {
    return (
        <SafeAreaView style={style.mainS}>
            {/* inicio de AppBar */}
            <View style={style.appBar}>
                <Ionicons name="arrow-back" size={30} color={'#ffffffff'} />
                <Text style={style.appBarTitle}>ALUMNOS REGISTRADOS</Text>
                <View style={{width:20 }}></View>
                </View>
            {/* fin de AppBar */}
            {/* Inicio de contenido (lista de alumnos)*/}
            <ScrollView style={{padding:16}}>        
                  <ScrollView style={{padding:16}}>        
    {/* Alumno 1 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://w7.pngwing.com/pngs/298/171/png-transparent-avatar-face-girl-female-woman-profile-happy-avatar-icon.png'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Ana Kimberly</Text>
            <Text style={style.userDetails}>Ing. Sistemas Computacionales</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7BS</Text>
           
        </View>
    </View>

    {/* Alumno 2 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://i0.wp.com/www.mascarilla.org/wp-content/uploads/2020/06/C%C3%B3mo-Crear-mi-Avatar-de-Facebook-Te-Explicamos-Paso-a-Paso-2.jpg?fit=253%2C283&ssl=1'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Brenda Silva</Text>
            <Text style={style.userDetails}>Lic. Administracion</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7BA</Text>
      
        </View>
    </View>
     {/* Alumno 3 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Raul Hernandez</Text>
            <Text style={style.userDetails}>Lic.Arquitectura</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7BA</Text>
      
        </View>
    </View>
     {/* Alumno 4 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_423682103.jpg'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Dalila Fernandez</Text>
            <Text style={style.userDetails}>Ing. Gestion Empresarial</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7BG</Text>
      
        </View>
    </View>
     {/* Alumno 5 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://i.pinimg.com/236x/56/77/62/5677627c338956d1cb9bbdb7f49ae79e.jpg'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Romina Santiago</Text>
            <Text style={style.userDetails}>Ing. Mecatronica</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7UM</Text>
      
        </View>
    </View>
     {/* Alumno 6 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Sergio Gomez</Text>
            <Text style={style.userDetails}>Ing. Civil</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7BA</Text>
      
        </View>
    </View>
     {/* Alumno 7 */}
    <View style={style.card}>
        <Image source={{ uri: 'https://c0.klipartz.com/pngpicture/517/749/gratis-png-equipo-iconos-usuario-perfil-avatar-mujer-joven-thumbnail.png'}} style={style.avatar} />
        <View style={style.cardinfo}>
            <Text style={style.userName}>Ameli Reyes</Text>
            <Text style={style.userDetails}>Ing. Sistemas Computacionales</Text>
            <Text style={style.userDetails}>22620053</Text>
            <Text style={style.userDetails}>7BS</Text>
      
        </View>
    </View>
</ScrollView>

            

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
        backgroundColor:'#b27f53ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:44,
        // padding: 50
    },
    appBar:{
        height:50,
        width:'100%',
        backgroundColor:'#e7c5a1ff',
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
        backgroundColor:'#e2bea5ff',
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
    cardinfo2:{
        flex:1,
        justifyContent:'center',
        marginBottom:10,
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
        backgroundColor:'#dec2a1ff',
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