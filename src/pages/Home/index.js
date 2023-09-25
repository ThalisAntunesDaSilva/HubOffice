import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, FlatList, TextInput, Modal } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import CarrouselTopPlaces from "../../components/CarrouselTopPlaces/index"
import CardHistoric from "../../components/CardHistoric/index"
// import CarrouselTopLocator from "../../components/CarrouselTopLocator/index"
import SectionFilterTypes from "../../components/SectionFilterTypes"

const DATA = [
  { id: '1', text: 'Item 1' },
];



export default function App() {

const [openModal, setOpenModal] = useState(false)

function renderModal(){
  return(
    <Modal visible={openModal} animationType="slide" transparent={true}> 
      <View style={styles.viewModal}>
        <View style={styles.viewContentModal}>
     
     <View style={styles.headerModal}>
      <Text style={styles.titleModal}>Encontre seu local</Text>


      <TouchableOpacity onPress={() => setOpenModal(false)}>
      <Feather
          name="x-square"
          size={20}
          color="#000000"
         
        />
      </TouchableOpacity>
      </View>


      <SectionFilterTypes/>

<View style={styles.modalLabelForm}>
      <Feather
          name="map-pin"
          size={15}
          color="#000000"
          style={styles.modalIconForm}
        />
   <TextInput
        style={styles.inputModal}
        placeholder="Lugar"
      />
        </View>
   
        <View style={styles.modalLabelForm}>
      <Feather
          name="calendar"
          size={15}
          color="#000000"
          style={styles.modalIconForm}
        />
   <TextInput
        style={styles.inputModal}
        placeholder="Data de entrada"
      />
        </View>


        <View style={styles.modalLabelForm}>
      <Feather
          name="calendar"
          size={15}
          color="#000000"
          style={styles.modalIconForm}
        />
   <TextInput
        style={styles.inputModal}
        placeholder="Data de saída"
      />
        </View>

       
        <TouchableOpacity style={styles.buttonSearchPlace}><Text style={styles.buttonTextSearchPlace}>Buscar</Text></TouchableOpacity> 
        </View>

       
      </View>
    </Modal>
  )
}



  return (
    <View style={styles.container}>
      <View style={styles.divSearchNotify}>
     
     
      <TouchableOpacity  onPress={() => setOpenModal(true)} style={styles.buttonInputSearchLocation}>
      <TextInput
        
        placeholder="Para onde?"
      />
      <Feather
          name="search"
          size={30}
          color="#000000"
         
        />
      </TouchableOpacity>

     

      </View>



      <SectionFilterTypes/>
      
      
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
      
      <CarrouselTopPlaces/>

   
      <CardHistoric/>      

{/* <CarrouselTopLocator/> */}
    
      </View>
      
      )}
      />

 
{renderModal()}
 
    </View>
  );
}

