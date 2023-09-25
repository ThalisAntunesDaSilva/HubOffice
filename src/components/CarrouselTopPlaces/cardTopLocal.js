
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from "./stylesCardTopLocal";
import officeImage1 from "../../assets/officeImage1.png";
import officeImage2 from "../../assets/officeImage2.png";
import { useNavigation } from '@react-navigation/native';

export default function CardTopLocal({item}) {
  const navigation = useNavigation();
  return (
    <View style={styles.divPopularLocation}>
    <View style={styles.divImages}>
    <Image style={styles.imageDecoration} source={item.image}></Image>
    <View style={styles.divAlternativeImages}>
    <Image style={styles.imageDecoration} source={officeImage1}></Image>
    <Image style={styles.imageDecoration} source={officeImage2}></Image>
    </View> 
    </View>


    <View style={styles.divInfoLocation}>

<Text style={styles.textLocationTitle}>{item.title}</Text>
<Text style={styles.textLocationPrice}>R$ {item.value}</Text>
    </View>


 <View style={styles.divToLease}>
<View style={styles.divQuantityToLease}>
<Text style={styles.textQuantityNumber}>{item.numberLocations}</Text>
<Text style={styles.textLocation}>Locações</Text>
</View>

   <TouchableOpacity style={styles.buttonToLease}  onPress={() => navigation.navigate("Office")}><Text style={styles.buttonTextToLease}>Locar</Text></TouchableOpacity> 
</View>
    



    </View>

    );
}
