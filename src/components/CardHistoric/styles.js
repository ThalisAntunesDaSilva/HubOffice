import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' ,
        width: '100%',
    },
    cardHistoric : {

width: '100%',
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-evenly',

    },
    titleHistoricCard:{
        fontWeight: 'bold',
        fontSize: 20
    },

    infoHistoric:{
      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: 210,
    },
    titlePlaceHistoric:{
        fontWeight: 'bold',
        fontSize: 17
    },
    titlePrice:{
        color: '#A9ADB7',
        fontWeight: 'bold',

    },
    valuePrice: {
        fontWeight: 'bold',
        color: '#25D76C'
    },

    infoUser:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

   
    },
    avatarUser:{
        marginRight: 5
    },
    infoUserDetails:{
        display: 'flex',
        flexDirection: 'column',
    },
    buttonDetails:{
        marginLeft: 40
    },
   textDetails :{
    color: '#5446FF',
    fontWeight: 'bold',
   }
    

})