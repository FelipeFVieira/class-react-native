import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? 'white' : 'black',
    },
    
    title:{
        fontSize: 15,
        color: 'green'
    },
    
    paragraph:{
        fontSize: 12,
        color: 'green'
    }
});

