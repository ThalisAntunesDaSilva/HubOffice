import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
      },

      divSearchNotify: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      divFilterTypeLocation: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    
      },
      textFilterTypeLocation:{
        fontWeight: 'bold',
      },

      buttonInputSearchLocation:{
display: 'flex',
flexDirection: 'row',

width: 250,
justifyContent: 'space-between'
      },
    

      divLocalization:{
width: '100%',
display: 'flex',
flexDirection: 'row',
justifyContent: "flex-start",
alignItems: 'center',
marginTop: 10,
paddingLeft: 30,
marginBottom: 10,
      },
    

      textLocalization: {
color: '#A9ADB7',
paddingLeft: 10
      },




});