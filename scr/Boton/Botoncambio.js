import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('white');

  const cambiarColor = () => {
    const colores = ['red', 'blue', 'green', 'yellow', 'purple'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setBgColor(colorAleatorio);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Cambiar color" onPress={cambiarColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
