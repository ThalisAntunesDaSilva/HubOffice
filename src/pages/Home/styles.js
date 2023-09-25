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

      viewModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },

      headerModal:{
display: 'flex',
flexDirection: 'row',
width: '100%',
justifyContent: 'space-around',
alignItems: 'center',
      },

      viewContentModal:{
        backgroundColor: 'white',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      },

      textContentModal:{
        color: 'black',
        fontSize: 10
      },

      modalLabelForm:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
      },

      titleModal:{
 
          fontWeight: 'bold',
          fontSize: 20
      
      },

      modalIconForm:{
        color: '#A9ADB7',
        marginRight: 10
      },
      modalTextForm:{
        color: '#A9ADB7'
      },
      inputModal:{
        borderBottomWidth: 2, 
        borderBottomColor: '#A9ADB7', 
        padding: 5, 
        width: 260,
       
      },

      buttonSearchPlace:{
        backgroundColor: '#5446FF',
        height: 50,
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
      },
      buttonTextSearchPlace:{
        color: '#fff',
        fontWeight: 'bold'
      }


});