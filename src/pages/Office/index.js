
import { Text, TouchableOpacity, View, Image, FlatList, TouchableHighlight } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import officeImage1 from "../../assets/officeTangua.jpg";
import thalisDev from "../../assets/thalisDev.png";
import CarrouselTopPlaces from "../../components/CarrouselTopPlaces/index"

const DATA = [
  { id: '1', text: 'Item 1' },
];

export default function App() {
  return (
    <View  style={styles.container}>
        <View  style={styles.viewHeader}>
   
      </View> 
<FlatList
        data={(DATA)}
        // style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
 
        renderItem={({ item }) => (
  <View>
        <Image  style={styles.imageOffice} source={officeImage1}/>

 <View style={styles.headerInfoOffice}>   
<Text style={styles.titleOfficeDetail}> Escritório Tanguá</Text>

<TouchableOpacity style={styles.buttonToLease}  onPress={() => navigation.navigate("Office")}><Text style={styles.buttonTextToLease}>Locar</Text></TouchableOpacity> 
</View>  


<View style={styles.viewDetailsInfo}>

<View style={styles.viewDetailInfo}>
  <Text style={styles.scoreInfo}>5.0</Text>
  <Text style={styles.textInfoLabel}>Score</Text>
</View>

<View style={styles.viewDetailInfo}>
  <Text style={styles.numberInfo}>30</Text>
  <Text style={styles.textInfoLabel}>Locações</Text>
</View>


<View style={styles.viewDetailInfo}>
  <Text  style={styles.numberInfo}>R$ 230,00</Text>
  <Text style={styles.textInfoLabel}>Por hora</Text>
</View>

</View>


<View style={styles.viewDetailInfoOwner}>
                    <View style={styles.infoUser}>   
                        <Image style={styles.avatarUser} source={thalisDev}/> 
                  <View style={styles.infoUserDetails}>
                    <Text  style={styles.infoUserDetailsName}>Thalis</Text> 
                    <Text style={styles.infoUserDetailsUserName}>@thalis_</Text>
                    </View>
                    </View>


<View style={styles.viewPlaceDetailsText}>
<Text style={styles.textPlaceDetails}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et malesuada nunc. Fusce suscipit dolor id metus aliquam, ut viverra ligula cursus. Integer malesuada volutpat ex, eu fringilla dui auctor non. In hac habitasse platea dictumst.
</Text>
</View>

<View style={styles.viewTagOffice}>
<View style={styles.viewTagItemsOffice}>
  <Text style={styles.viewTextItemsOffice}>Ar Condicionado</Text>
  </View>

  <View style={styles.viewTagItemsOffice}>
  <Text style={styles.viewTextItemsOffice}>Wi-fi</Text>
  </View>

  <View style={styles.viewTagItemsOffice}>
  <Text style={styles.viewTextItemsOffice}>Estacionamento</Text>
  </View>

</View>
              
                </View>

                <Text style={styles.titleSimilares}>Similares</Text>
                <CarrouselTopPlaces/>

  </View>
      )}
      />

</View> 

  );
}

