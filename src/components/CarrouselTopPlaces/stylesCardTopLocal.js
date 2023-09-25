import { StyleSheet } from "react-native";

export default StyleSheet.create({
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

        justifyContent: 'space-around',

        marginLeft: 10

    },

    divImages: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    divAlternativeImages:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        
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

                      divToLease:{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                  
                      },


                      divQuantityToLease:{
                        display: 'flex',
                        flexDirection: 'row',
                      
                      },

                      textQuantityNumber:{
                        fontWeight: 'bold',
                      },
                      textLocation:{
                        color: '#A9ADB7',
                        paddingLeft: 10
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
