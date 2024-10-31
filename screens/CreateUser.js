import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

export default function CreateUser() {
    const [nome, setNome] = useState('');
    const [trabalho, setTrabalho] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nome,
                    job: trabalho,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Cadastro bem-sucedido', `Nome: ${data.name}\nTrabalho: ${data.job}`);
            } else {
                Alert.alert('Cadastro falhou', data.error || 'Erro ao cadastrar.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        }
    };

    return (
        <LinearGradient
            colors={['#e0e0e0', '#bdbdbd']}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <Text style={styles.label}>Digite o seu nome:</Text>
                <TextInput
                    value={nome}
                    onChangeText={setNome}
                    style={styles.input}
                />
                <Text style={styles.label}>Digite seu trabalho:</Text>
                <TextInput
                    value={trabalho}
                    onChangeText={setTrabalho}
                    style={styles.input}
                />
                <Button title="Cadastrar" onPress={handleRegister} />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});
