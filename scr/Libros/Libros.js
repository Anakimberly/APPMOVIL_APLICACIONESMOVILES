import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Libros() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [prestamos, setPrestamos] = useState({}); 

  const libros = [
    { 
      titulo: "HARRY POTTER Y LA PIEDRA FILOSOFAL", 
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg", 
      descripcion: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos..."
    },
    { 
      titulo: "PINOCHO", 
      img: "https://wmagazin.com/wp-content/uploads/2024/12/Portadas.2024-mejores-bonitas-pinocho-collodi-WMagazin-e1735465749152.jpg", 
      descripcion: "Las aventuras de Pinocho mezcla la ingenuidad infantil con una crudeza casi inquietante..."
    },
    { 
      titulo: "LOS JUEGOS DEL HAMBRE EN LLAMAS", 
      img: "https://http2.mlstatic.com/D_617397-MLU77278140078_072024-C.jpg", 
      descripcion: "Contra todo pronóstico, Katniss ha ganado Los Juegos del Hambre..."
    },
    { 
      titulo: "DE SANGRE Y CENIZAS", 
      img: "https://libreriateno.com/wp-content/uploads/2024/11/81u1YnuTrdL-650x1024.jpg", 
      descripcion: "Una Doncella, elegida desde su nacimiento para dar comienzo a una nueva era..."
    },
  ];

  const handleTomarLibro = (index) => {
    setPrestamos(prev => {
      const libroPrev = prev[index] || { tomado: false, contador: 0 };
      return {
        ...prev,
        [index]: { 
          tomado: !libroPrev.tomado, 
          contador: libroPrev.contador + (libroPrev.tomado ? 0 : 1) 
        }
      };
    });
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      {libros.map((libro, index) => {
        const estado = prestamos[index]?.tomado ? "Prestado" : "Disponible";
        const contador = prestamos[index]?.contador || 0;
        return (
          <View key={index} style={style.card}>
            <Image style={style.img} source={{ uri: libro.img }} />
            <View style={style.cardContenido}>
              <Text style={style.titulo}>{libro.titulo}</Text>

              {expandedIndex === index && (
                <Text style={style.descripcion}>{libro.descripcion}</Text>
              )}

              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}>
                <TouchableOpacity
                  style={[
                    style.botonSombreado, 
                    prestamos[index]?.tomado ? { backgroundColor: "#f28b82" } : { backgroundColor: "#a0e7e5" }
                  ]}
                  onPress={() => handleTomarLibro(index)}
                  activeOpacity={0.7}
                >
                  <Text style={style.textoBoton}>
                    {prestamos[index]?.tomado ? "Devolver libro" : "Tomar libro"}
                  </Text>
                </TouchableOpacity>

                <Text style={{ marginLeft: 10, fontSize: 14, color: "#333" }}>
                  {estado} - Prestado {contador} {contador === 1 ? "vez" : "veces"}
                </Text>
              </View>

              <TouchableOpacity
                style={[style.botonSombreado, { marginTop: 8, backgroundColor: "#b9b7b7ff" }]}
                onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <Text style={style.textoBoton}>
                  {expandedIndex === index ? "Ver menos" : "Ver más"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 140,
  },
  cardContenido: {
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  descripcion: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
  },
  botonSombreado: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 15,
  },
  textoBoton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0a0a0aff",
    textAlign: "center",
  },
});
