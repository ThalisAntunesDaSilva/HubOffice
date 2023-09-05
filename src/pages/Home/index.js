import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import officeImage from "../../assets/officeImage.png";
import officeImage1 from "../../assets/officeImage1.png";
import officeImage2 from "../../assets/officeImage2.png";

import Carrousel from "../../components/Carrousel/index"
import CardHistoric from "../../components/CardHistoric/index"

const DATA = [
  { id: '1', text: 'Item 1' },
];

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
          onPress={() => navigation.navigate("")}
        />

        <Text style={styles.textLocalization}>Curitiba</Text>
</View>

      
<FlatList
        data={(DATA)}
        // style={styles.listFormRegister}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
      <View>
      
      <Carrousel/>

      
      <CardHistoric/>      

    
      </View>
      
      )}
      />

 

 
    </View>
  );
}

