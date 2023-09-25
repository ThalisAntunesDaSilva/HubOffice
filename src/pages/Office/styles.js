import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

  
      },
      viewHeader:{
        height: 80,
        backgroundColor: 'white',
        width: '100%'
      
      },
      imageOffice:{
        height: 300,
        width: '100%'
      },
      textOverlay: {
        position: 'absolute',
        bottom: 100, 
        left: 10, 
        color: 'white',
        fontSize: 36, 
      },
      viewOverlay: {
        position: 'absolute',
        bottom: 10, 
        left: 10, 
        width: 350,
        height: 80,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5, 
      }
});