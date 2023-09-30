import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed. Username:', username, 'Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.viewInformation}>
          <Text style={styles.nameText}>Login</Text>
          <Text>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <Text>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>

        <TouchableOpacity>
          <Feather
            name="bell"
            size={30}
            color="#000000"
            onPress={() => navigation.navigate("Animals")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonHome} onPress={handleLogin}>
          <View>
            <Text style={styles.buttonHomeTextTitle}>Login</Text>
            <Text style={styles.buttonHomeTextSubtitle}>Não tem conta? Registre-se</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
