import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import pampaTec from "../../assets/pampaTec.png";
import thalisDev from "../../assets/thalisDev.png";


export default function CardHistoric() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHistoricCard}>Histórico</Text>

            <View style={styles.cardHistoric}>
                <Image source={pampaTec}/>
               <View style={styles.infoHistoric}>
               
                <Text style={styles.titlePlaceHistoric}>Pampatec Alegrete</Text>
                <View>
                    <Text style={styles.titlePrice}>Custou</Text>
                    <Text style={styles.valuePrice}>R$ 150,00</Text>
                </View>

                <View>
                    <View style={styles.infoUser}>
                    
                        <Image style={styles.avatarUser} source={thalisDev}/> 
                  <View style={styles.infoUserDetails}>
                    <Text>Thalis</Text> 
                    <Text>@thalis_</Text>
                    </View>
                    

                    <TouchableOpacity style={styles.buttonDetails}>
                        <Text style={styles.textDetails}>Detalhes</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
        </View>
       
    );
}
