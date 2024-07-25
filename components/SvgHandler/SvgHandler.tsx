import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import Popover from '../Colors/Popover';
import SvgComponent from '../Images/SvgComponent';
function SvgHandler() {
  const [svgColor, setSvgColor] = useState<string>('green');
  const [selectedColor, setSelectedColor] = useState<string>('green');
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);

  const handleLoadSvg = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/svg+xml'],
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        const response = await fetch(uri);
        const text = await response.text();
        setSvgContent(text);
        setSvgLoaded(true);
      } else {
        console.log('Document Picker cancelled or no file selected.');
      }
    } catch (error) {
      console.error('Error loading SVG:', error);
    }
  };

  const handleDeleteSvg = () => {
    setSvgContent(null);
    setSvgLoaded(false);
  }

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
          {svgContent ? (
            <SvgComponent content={svgContent} color={svgColor} />
          ) : (
            <Text>No SVG Loaded</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.paletteContainer}>
        {
          svgLoaded ? <Button title="Delete" onPress={handleDeleteSvg} /> : <Button title="Load SVG" onPress={handleLoadSvg} />
        }
        
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    position: 'absolute',
    top: 50,
  },
  text: {
    color: 'black',
    fontSize: 25
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

export default SvgHandler;
