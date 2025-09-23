import  Ionicons  from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";
import Cardimg from "../componentes/Cardimg";


export default function Homeprincipal () {
 return (
  
    <View style={style.mainS}>
        <Text style ={style.title}> Pagina Principal </Text>
       
      <Cardimg/>
        
    </View>
   
  );
}

const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor: '#606398ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeigth:44,
        padding: 50
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign:'center'
    },
})