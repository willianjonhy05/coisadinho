import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';

export default function CreateUser() {
    const [nome, setNome] = useState('');
    const [trabalho, setTrabalho] = useState('');

    const handleRegister = () => {
        alert(`Nome: ${nome}\nTrabalho: ${trabalho}`);
     
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
