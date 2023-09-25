
import { Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import officeImage1 from "../../assets/officeTangua.jpg";

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
         
   
      <Text style={styles.textOverlay}>Escritório Tanguá</Text>
      <View style={styles.viewOverlay}>
       
       <View style={styles.boxInfo}>
      
       </View>
      </View>
     </View>
      )}
      />

</View> 

  );
}

