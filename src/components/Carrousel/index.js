import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import offices from '../../../offices';
import CardTopLocal from "../cardTopLocal";

export default function Carrousel() {
    return (
        <View style={styles.container}>
            <FlatList data={offices} renderItem={({ item }) => <CardTopLocal item={item} />} horizontal   showsHorizontalScrollIndicator={false} pagingEnabled/>
        </View>
    );
}
