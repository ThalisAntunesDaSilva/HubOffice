import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
    
divPopularLocation:{
    display: 'flex',
    flexDirection: 'column',

    width: 290,
    height: 300,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10, 
},

divImages: {
    display: 'flex',
    flexDirection: 'row',
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
      divAlternativeImages:{
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',

      },

      textLocalization: {
color: '#A9ADB7',
paddingLeft: 10
      },

      divInfoLocation:{
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 10,
      },

      textLocationTitle:{
        fontWeight: 'bold',
      },
      textLocationPrice:{
        fontWeight: 'bold',
        color: '#25D76C'
      },
      textQuantityNumber:{
        fontWeight: 'bold',
      },
      textLocation:{
        color: '#A9ADB7',
        paddingLeft: 10
      },
      divQuantityToLease:{
        display: 'flex',
        flexDirection: 'row',
      
      },
      divToLease:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      buttonToLease:{
        backgroundColor: '#5446FF',
        height: 40,
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
      },
      buttonTextToLease:{
        color: '#fff',
        fontWeight: 'bold'
      }





});