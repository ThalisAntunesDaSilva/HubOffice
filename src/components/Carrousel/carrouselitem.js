import React from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import styles from "./styles";

export default function CarrouselItem({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.title}</Text>
            {/* Renderizar outros detalhes do item aqui */}
        </View>
    );
}
