import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback, Alert, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Rect } from 'react-native-svg';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

const { width } = Dimensions.get('window');

export default function App() {
  const [showModal, setShowModal] = useState(false);
  // Estado para el color del SVG
  const [svgColor, setSvgColor] = useState<string>('green');
  // Estado para el color seleccionado
  const [selectedColor, setSelectedColor] = useState<string>('green');

  // Lista de colores para la paleta
  const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

  // Función para cambiar el color seleccionado
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // Función para manejar el toque en el SVG
  const handleSvgPress = () => {
    setSvgColor(selectedColor); // Cambia el color del SVG al color seleccionado
    Alert.alert('SVG cambiado de color!');
  };
  const onSelectColor = ({ hex }) => {
    // do something with the selected color.
    console.log(hex);
    setSelectedColor(hex);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Este es una Prueba</Text>
        </View>
        <View style={styles.svgContainer}>
          <Svg height={300} width={width} style={styles.svg}>
            <Rect
              x="0"
              y="0"
              width={width}
              height={300}
              fill={svgColor} // Usa el color del estado
              onPress={handleSvgPress} // Maneja el evento de toque del SVG
            />
          </Svg>
        </View>
        <View style={styles.paletteContainer}>
          <Button title='Color Picker' onPress={() => setShowModal(true)} />

          <Modal visible={showModal} animationType='slide'>
            <ColorPicker style={{ width: '70%' }} value='red' onComplete={onSelectColor}>
              <Preview />
              <Panel1 />
              <HueSlider />
              <OpacitySlider />
              <Swatches />
            </ColorPicker>

            <Button title='Ok' onPress={() => setShowModal(false)} />
          </Modal>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textContainer: {
    position: 'absolute',
    top: 50,
  },
  text: {
    color: 'white',
  },
  svgContainer: {
    marginTop: 100,
    alignItems: 'center',
    flex: 1,
  },
  svg: {
    // Puedes ajustar estilos adicionales aquí si es necesario
  },
  paletteContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
});