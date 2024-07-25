

import React from 'react';
import { SvgXml } from 'react-native-svg';

interface SvgComponentProps {
  content: string;
  color: string;
}
const SvgComponent: React.FC<SvgComponentProps> = ({ content, color }) => {
  console.log(color)
  return <SvgXml xml={content} fill={color} />;
};

export default SvgComponent;
