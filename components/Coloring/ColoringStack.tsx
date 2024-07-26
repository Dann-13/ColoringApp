// DetailScreen.tsx
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import Popover from '../Colors/Popover';
import Icon from '../Images/Icon'; 
function ColoringStack () {;
    const [svgColor, setSvgColor] = useState<string>('green');
    const [selectedColor, setSelectedColor] = useState<string>('green');
    const [isPopoverVisible, setPopoverVisible] = useState(false);


    const handleIconPress = () => {
      setSvgColor(selectedColor);
    };
  
    const onSelectColor = ({ hex }: { hex: string }) => {
      setSelectedColor(hex);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Coloring</Text>
        </View>
  
        <View style={styles.svgContainer}>
          <TouchableOpacity onPress={handleIconPress} style={styles.svgTouch}>
            <Icon color={svgColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.paletteContainer}>
          <Button title="Color Picker" onPress={() => setPopoverVisible(true)} />
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
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    textContainer: {
      position: 'absolute',
      top: 50,
      alignItems: 'center', // Asegura que el texto esté centrado horizontalmente
    },
    text: {
      color: 'black',
      fontSize: 25,
    },
    svgContainer: {
      marginTop: 100,
      alignItems: 'center',
      width: '100%',
      height: '60%',
    },
    svgTouch: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paletteContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
  });
export default ColoringStack;
