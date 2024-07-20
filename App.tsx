import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableWithoutFeedback, Alert, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Rect } from 'react-native-svg';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import Popover from './components/Colors/Popover';
import Icon from './components/Images/Icon';

const { width } = Dimensions.get('window');

export default function App() {
  // Estado para el color del SVG
  const [svgColor, setSvgColor] = useState<string>('green');
  // Estado para el color seleccionado
  const [selectedColor, setSelectedColor] = useState<string>('green');
  // Estado para mostrar u ocultar el popover
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  /* // Función para manejar el toque en el SVG
  const handleSvgPress = () => {
    setSvgColor(selectedColor); // Cambia el color del SVG al color seleccionado
  };
 */
  const handleIconPress = () => {
    setSvgColor(selectedColor); // Cambia el color del SVG al color seleccionado
  };


  const onSelectColor = ({ hex }) => {
    setSelectedColor(hex);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Coloring</Text>
        </View>

        <View style={styles.svgContainer}>
          <TouchableOpacity onPress={handleIconPress}>
            <Icon color={svgColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.paletteContainer}>
          <Button title='Color Picker' onPress={() => setPopoverVisible(true)} />
        </View>
        <Popover isVisible={isPopoverVisible} onClose={() => setPopoverVisible(false)}>
          <ColorPicker value={selectedColor} onComplete={onSelectColor}>
            <Preview />
            <Panel1 />
            <HueSlider />
            <OpacitySlider />
            <Swatches />
          </ColorPicker>
        </Popover>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
  paletteContainer: {
    marginBottom: 20,
  },
});