
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from "./styles";
import officeImage from "../assets/officeImage.png";
import officeImage1 from "../assets/officeImage1.png";
import officeImage2 from "../assets/officeImage2.png";

export default function CardTopLocal() {
  return (
    <View style={styles.divPopularLocation}>
    <View style={styles.divImages}>
    <Image style={styles.imageDecoration} source={officeImage}></Image>
    <View style={styles.divAlternativeImages}>
    <Image style={styles.imageDecoration} source={officeImage1}></Image>
    <Image style={styles.imageDecoration} source={officeImage2}></Image>
    </View> 
    </View>


    <View style={styles.divInfoLocation}>

<Text style={styles.textLocationTitle}>Escritório beira-mar Floripa</Text>
<Text style={styles.textLocationPrice}>R$ 250,00</Text>
    </View>


 <View style={styles.divToLease}>
<View style={styles.divQuantityToLease}>
<Text style={styles.textQuantityNumber}>500</Text>
<Text style={styles.textLocation}>Locações</Text>
</View>

   <TouchableOpacity style={styles.buttonToLease}><Text style={styles.buttonTextToLease}>Locar</Text></TouchableOpacity> 
</View>
    


    </View>

    );
}
