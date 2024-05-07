import { Text, View } from 'react-native';

// 1º method using style-inline
export default function App() {
  return (
    <View style={{ 
            display:'flex', 
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black', 
            height: 'auto',
            margin: 'auto',
            flex: 1
            }}
    >

      <Text 
        style={{
          color:'green',
          fontSize: 15
        }}
      >
        INDMO - Interface for Mobile Devices
      </Text>
     
      <Text 
        style={{
          color:'green',
          fontSize: 12
        }}
      >
        Hello World!
      </Text>

    </View>
  );
}