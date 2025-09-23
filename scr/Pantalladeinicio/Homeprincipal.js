import  Ionicons  from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";
import CardImg from "../../componets/CardImg";


export default function HomePrincipal () {
 return (
  <ScrollView>
    <View style={style.mainS}>
        <Text style ={style.title}> Pagina Principal </Text>
       
      <CardImg/>
        
    </View>
    </ScrollView>
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