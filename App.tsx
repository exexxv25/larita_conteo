import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  // Fecha objetivo (16 de marzo)
  const targetDate: Date = new Date('2024-03-16T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now: Date = new Date();
      const difference: number = targetDate.getTime() - now.getTime();
      const days: number = Math.ceil(difference / (1000 * 60 * 60 * 24));

      if (days === 0) {
        setMessage('¡Hoy es tu cumpleaños, Larita! 🎉🎂');
      } else if (days === 1) {
        setMessage('¡Mañana es tu cumpleaños, Larita!!! 🥳🎈');
      } else if (days > 1) {
        setMessage(`Faltan ${days} días para tu cumpleaños, Larita 😊`);
      } else if (days < 0) {
        setMessage('¡Ya pasó tu cumpleaños! ¡Hay que esperar hasta el año que viene! 😅');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pKzUKbZOQWnAbx7og6a7Wd6Oc5n1KWiGDYYv7Vjn0w&s' }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente para mejorar la legibilidad del texto
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: '#ffffff', // Color de texto blanco para contraste con el fondo
    margin: 10, // Margen alrededor del texto
    fontWeight: 'bold', // Estilo de fuente grueso
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajuste de la imagen para cubrir todo el contenedor
    justifyContent: 'center',
  },
});

export default App;
