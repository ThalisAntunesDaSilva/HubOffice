import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";


export default function SectionFilterTypes() {

  return (

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

  );
}

