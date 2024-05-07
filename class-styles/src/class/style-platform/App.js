import { Text, View } from 'react-native';
import { styles } from './style.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO - Interface for Mobile Devices</Text>
      <Text style={styles.paragraph}>Hello World!</Text>
    </View>
  );
}