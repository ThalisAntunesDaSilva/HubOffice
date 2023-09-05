import { StyleSheet } from "react-native";

export default StyleSheet.create({
  divTopLocators:{
    marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        height: 150,
        borderRadius: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10, 
    },
    divAvatar:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    },
    imageAvatar:{
      borderRadius: 100
    },


    divNameLocator:{

      height: 80,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    nameLocator:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    nameScore:{
      color: '#25D76C',
      fontWeight: 'bold',

    }


});
