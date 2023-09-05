import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import locators from '../../../locators';
import CardTopLocators from "./cardTopLocators";

export default function CarrouselTopLocator() {

    return (
        <View style={styles.container}>
           
            <FlatList data={locators}  keyExtractor={(item) => item.id} renderItem={({ item }) => <CardTopLocators item={item} />} horizontal   showsHorizontalScrollIndicator={false} pagingEnabled/>
        </View>
    );
}
