import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";

export default function Finalize({ navigation }) {
    const [cartao, setCartao] = useState('');
    const [bandeira, setBandeira] = useState('');
    const [saida, setSaida] = useState('');
    const [entrada, setEntrada] = useState('');
    const [horadeentrada, setHoraDeEntrada] = useState('');
    const [horadesaida, setHoraDeSaida] = useState('');

    const handleFinalizacao = () => {
        if (isValidCardNumber(cartao)) {
            const cardBrand = getCardBrand(cartao);
            setBandeira(cardBrand);
            console.log('Número do cartão válido. Bandeira: ' + cardBrand);
        } else {
            console.log('Número do cartão inválido.');
        }
    };

    const isValidCardNumber = (number) => {
        return number.match(/^\d{16}$/) !== null;
    };

    const getCardBrand = (number) => {
        if (number.startsWith('4')) {
            return 'Visa';
        } else if (number.startsWith('5')) {
            return 'MasterCard';
        } else {
            return 'Desconhecido';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.viewInformation}>
                    <Text style={styles.nameText}>Finalize sua locação</Text>
                    <Text>Número do Cartão</Text>
                    <TextInput
                        style={styles.input}
                        value={cartao}
                        onChangeText={text => setCartao(text)}
                    />
                    <Text>Bandeira do Cartão: {bandeira}</Text>
                    <Text>Saída</Text>
                    <TextInput
                        style={styles.input}
                        value={saida}
                        onChangeText={text => setSaida(text)}
                    />
                    <Text>Entrada</Text>
                    <TextInput
                        style={styles.input}
                        value={entrada}
                        onChangeText={text => setEntrada(text)}
                    />
                    <Text>Hora de Entrada</Text>
                    <TextInput
                        style={styles.input}
                        value={horadeentrada}
                        onChangeText={text => setHoraDeEntrada(text)}
                    />
                    <Text>Hora de Saída</Text>
                    <TextInput
                        style={styles.input}
                        value={horadesaida}
                        onChangeText={text => setHoraDeSaida(text)}
                    />
                </View>
            </View>

            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.buttonLocar} onPress={handleFinalizacao}>
                    <Text style={styles.buttonCartaoTextSubtitle}>LOCAR</Text>
                </TouchableOpacity>
            </View>

            {/* Botão "LOCAR" no rodapé */}
            <TouchableOpacity style={styles.buttonLocarRodape} onPress={handleFinalizacao}>
                <Text style={styles.buttonCartaoTextSubtitle}>LOCAR</Text>
            </TouchableOpacity>
        </View>
    );
}
