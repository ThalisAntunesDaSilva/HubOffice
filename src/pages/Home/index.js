import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import officeImage from "../../assets/officeImage.png";
import officeImage1 from "../../assets/officeImage1.png";
import officeImage2 from "../../assets/officeImage2.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.divSearchNotify}>
      <TouchableOpacity onPress={() => {}}>
      <Feather
          name="search"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Animals")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
      <Feather
          name="bell"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Animals")}
        />
      </TouchableOpacity>

      </View>



      <View style={styles.divFilterTypeLocation}>
      <TouchableOpacity onPress={() => {}}>
      <Text  style={styles.textFilterTypeLocation}>Estação</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
      <Text style={styles.textFilterTypeLocation}>Sala</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
      <Text style={styles.textFilterTypeLocation}>Escritório</Text>
      </TouchableOpacity>
      </View>
      
      
      <View style={styles.divLocalization}>
<Feather
          name="map-pin"
          size={30}
          color="#000000"
          onPress={() => navigation.navigate("Animals")}
        />

        <Text style={styles.textLocalization}>Curitiba</Text>
</View>

      
      
      
      
      
      
      
      
      
      
      
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

 
    </View>
  );
}

