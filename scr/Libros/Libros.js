import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Libros() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const libros = [
    {
      titulo: "HARRY POTTER Y LA PIEDRA FILOSOFAL",
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg",
      descripcion: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular.",
    },
    {
      titulo: "PINOCHO",
      img: "https://wmagazin.com/wp-content/uploads/2024/12/Portadas.2024-mejores-bonitas-pinocho-collodi-WMagazin-e1735465749152.jpg",
      descripcion: "Las aventuras de Pinocho mezcla la ingenuidad infantil con una crudeza casi inquietante. Pinocho es timado, encarcelado y vendido, y está a punto de morir acuchillado, ahorcado, devorado, ahogado y estofado.",
    },
    {
      titulo: "LOS JUEGOS DEL HAMBRE EN LLAMAS",
      img: "https://http2.mlstatic.com/D_617397-MLU77278140078_072024-C.jpg",
      descripcion: "Contra todo pronóstico, Katniss ha ganado Los Juegos del Hambre. Es un milagro que ella y su compañero del Distrito 12, Peeta Mellark, sigan vivos. Katniss debería sentirse aliviada, incluso contenta, ya que, al fin y al cabo, ha regresado con su familia y su amigo de toda la vida, Gale. Sin embargo, nada es como a ella le gustaría. ",
    },
    {
      titulo: "DE SANGRE Y CENIZAS",
      img: "https://libreriateno.com/wp-content/uploads/2024/11/81u1YnuTrdL-650x1024.jpg",
descripcion: "Una Doncella,elegida desde su nacimiento para dar comienzo a una nueva era, la vida de Poppy nunca le ha pertenecido. La vida de la Doncella es solitaria. Jamás la tocarán. Jamás la mirarán. Jamás le hablarán. Jamás sentirá placer. Mientras espera al día de su Ascensión, preferiría estar con los guardias luchando contra el mal que se llevó a su familia que preparándose para que los dioses la encuentren lo bastante digna. Pero la elección nunca ha sido suya.",
    },
  ];

  return (
    <ScrollView>
      {libros.map((libro, index) => (
        <View key={index} style={[style.card, { backgroundColor: index % 2 === 0 ? "#c4dff6ff" : "#c4dff6ff" }]}>
          <Image style={style.img} source={{ uri: libro.img }} />
          <View style={style.card_contenido}>
            <Text style={style.titulo}>{libro.titulo}</Text>

            {expandedIndex === index && (
              <Text style={style.descripcion}>{libro.descripcion}</Text>
            )}

            <TouchableOpacity
              style={style.botonSombreado}
              onPress={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <Text style={style.textoBoton}>
                {expandedIndex === index ? "Ver menos" : "Ver más"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    shadowColor: "#c3def2ff",
    elevation: 4,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    overflow: "hidden",
    shadowOffset: { width: 0, height: 3 },
  },
  titulo: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  descripcion: {
    marginTop: 8,
    fontSize: 16,
    color: "#333333",
  },
  img: {
    width: "100%",
    height: 120,
  },
  card_contenido: {
    padding: 16,
  },
  botonSombreado: {
    marginTop: 10,
    backgroundColor: "#eeeeeeff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
  textoBoton: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
