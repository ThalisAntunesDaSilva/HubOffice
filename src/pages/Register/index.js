import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Register = () => {
    const [cadastroTitulo, setCadastroTitulo] = useState('');
    const [nome, setNome] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');

    const handleCadastro = () => {
        // Lógica para lidar com o cadastro aqui
        console.log('Realizar o cadastro com os seguintes dados:', cadastroTitulo, nome, username, email, senha);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="UserName"
                value={username}
                onChangeText={(text) => setUserName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />
            <View style={styles.tipoUsuarioContainer}>
                <TouchableOpacity
                    style={[styles.tipoUsuarioButton, tipoUsuario === 'proprietario' ? styles.selectedButton : null]}
                    onPress={() => setTipoUsuario('proprietario')}
                >
                    <Text style={styles.tipoUsuarioButtonText}>Proprietário</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tipoUsuarioButton, tipoUsuario === 'locatario' ? styles.selectedButton : null]}
                    onPress={() => setTipoUsuario('locatario')}
                >
                    <Text style={styles.tipoUsuarioButtonText}>Locatário</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastre-se</Text>
                <Text>Já tem conta?Faça seu login</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Register;
