import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, SafeAreaView, StyleSheet } from 'react-native';
import styles from './styles';
import Profile from '../../assets/Profile.svg';
import Email from '../../assets/Email.svg';



const CheckBox = ({ label, onChange, checked }) => {
    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={onChange}>
            <View style={styles.checkbox}>
                {checked && <Text style={styles.checkmark}>&#10003;</Text>}
            </View>
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};


const YourComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>Já tem conta? </Text>
            <Text style={[styles.footerText, styles.blueText]}>Faça seu login</Text>
        </View>
    );
};

const CheckBoxPage = () => {
    const optionsIndividual = [{ text: 'Propreitário', id: 1 }];
    return (
        <SafeAreaView style={style.container}>
            <CheckBox options={optionsIndividual} onchange={(op) => alert} />
        </SafeAreaView>
    );


};

const Register = () => {
    const [cadastroTitulo, setCadastroTitulo] = useState('');
    const [nome, setNome] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isProprietario, setIsProprietario] = useState(false);
    const [isLocatario, setIsLocatario] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('');  // Adicionado o estado para tipoUsuario


    const handleCadastro = () => {
        // Lógica para lidar com o cadastro aqui
        console.log('Realizar o cadastro com os seguintes dados:', cadastroTitulo, nome, username, email, senha);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro</Text>
            <Image source={Profile}></Image>
            <Image source={Email}></Image>

            {/* Logos */}
            <View style={styles.logosContainer}>
                <TouchableOpacity style={styles.icones}>
                    <Image source={Email} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icones}>
                    <Image source={'../../assets/Email.svg'} />
                </TouchableOpacity>
            </View>
            <View style={styles.logosContainer}>
                <TouchableOpacity style={styles.icones}>
                    <Image source={Profile} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icones}>
                    <Image source={'../../assets/Profile.svg'} />
                </TouchableOpacity>
            </View>
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
                    style={[
                        styles.tipoUsuarioButton,
                        isProprietario ? styles.selectedButton : null,
                    ]}
                    onPress={() => {
                        setIsProprietario(!isProprietario);
                        setIsLocatario(false);
                        setTipoUsuario('Proprietário');  // Atualize o tipoUsuario ao selecionar Proprietário
                    }}
                >
                    <Text style={styles.tipoUsuarioButtonText}>Proprietário</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tipoUsuarioButton,
                        isLocatario ? styles.selectedButton : null,
                    ]}
                    onPress={() => {
                        setIsLocatario(!isLocatario);
                        setIsProprietario(false);
                        setTipoUsuario('Locatário');  // Atualize o tipoUsuario ao selecionar Locatário
                    }}
                >
                    <Text style={styles.tipoUsuarioButtonText}>Locatário</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.buttonRegister} onPress={handleCadastro}>
                <Text style={styles.buttonRegisterText}>Cadastre-se</Text>
            </TouchableOpacity>
            <Text style={styles.footerText}>
                Já tem conta? <Text style={styles.blueText}>Faça seu login</Text>

            </Text>
        </View >
    );
};


export default Register;
