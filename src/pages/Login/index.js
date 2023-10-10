import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed. Username:', username, 'Password:', password);
  };

  const buttonNaoTemConta = (
    <TouchableOpacity style={styles.buttonHome}>
      <Text style={styles.buttonHomeTextSubtitle}>Não tem conta? Registre-se</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.containerHeader}>
        <View style={styles.viewInformation}>
          <Text style={styles.nameText}>Login</Text>
          <Text>Nome de usuário</Text>
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
      </View>

      {/* Botão de Login */}
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.buttonHome} onPress={handleLogin}>
          <Text style={styles.buttonHomeTextTitle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Ação quando clicar em "Não tem conta? Registre-se" */ }}>
          <Text style={styles.buttonHomeTextSubtitle}>Não tem conta?
            Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
