import { Text, View, StyleSheet } from 'react-native';

// 3º method using external StyleSheet - importing styles from style.js
import { styles } from './style.js';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INDMO - Interface for Mobile Devices</Text>
      <Text style={styles.paragraph}>Hello World!</Text>
    </View>
  );
}

// 2º method using internal StyleSheet 

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },

//   title:{
//     fontSize: 15,
//     color: 'green'
//   },

//   paragraph:{
//     fontSize: 12,
//     color: 'green'
//   }
// });