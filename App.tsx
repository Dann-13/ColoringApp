
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SvgHandler from './components/SvgHandler/SvgHandler';
import Home from './components/Home/Home';
import Navigation from './components/ui/Navigation/Navigation';
export default function App() {
  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
}
