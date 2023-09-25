import { StyleSheet } from "react-native";

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
      headerInfoOffice:{
        marginTop: 10,
display: 'flex',
flexDirection: 'row',
width: '100%',
justifyContent: 'space-around',
alignItems: 'center',

      },

      titleOfficeDetail:{
        fontWeight: 'bold',
        fontSize: 30
    },

      buttonToLease:{
        backgroundColor: '#5446FF',
        height: 40,
        width: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
      },

      viewDetailsInfo:{
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

            },

            scoreInfo:{
          
                fontWeight: 'bold',
                color: '#25D76C'
            
            },
            numberInfo:{
              fontWeight: 'bold',
            },
            textInfoLabel:{
              fontWeight: 'bold',
              color: '#A9ADB7'
            },

            viewDetailInfo:{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'cemter',
              alignItems: 'center'
            },
      
      buttonTextToLease:{
        color: '#fff',
        fontWeight: 'bold'
      },

      viewDetailInfoOwner:{
width: '100%',

display: 'flex',
justifyContent: 'center',
alignItems: 'space-evenly',
      },
      
    infoUser:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 70,

      marginLeft: 30

 
  },


  infoUserDetailsName:{
    fontWeight: 'bold',
  },

  infoUserDetailsUserName:{
    color: '#A9ADB7'
  },


  avatarUser:{
      marginRight: 5,
      marginRight: 10,

  },

  viewPlaceDetailsText:{
paddingLeft: 30,
paddingRight: 30,
  },

  textPlaceDetails:{
textAlign: 'justify',
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
 },

 viewTagOffice:{
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 20,
  display: 'flex',
  flexDirection: 'column',

 },
 viewTextItemsOffice:{
  fontWeight:  'bold'
 },

 viewTagItemsOffice:{
  borderWidth: 1, 
  borderColor: 'black',
  borderRadius: 30,
  height: 40,
  width:150,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,

 },

 titleSimilares:{
  fontWeight: 'bold',
  fontSize: 20,
  paddingLeft: 30,
  paddingTop: 30,
}
    
});