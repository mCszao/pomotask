import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({ onAdd }) {
    const [taskText, setTaskText] = useState('');

    const handleButton = () => {
        if (taskText.trim().length > 2) {
            onAdd(taskText);
            setTaskText('');
        }
    }

    return (
        <View style={styles.area}>
            <TextInput
                style={styles.input}
                value={taskText}
                onChangeText={t => setTaskText(t)}
                placeholder="Digite uma tarefa..."
            />
            <Pressable onPress={handleButton} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    area: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        padding: 12,
        margin: 10,
        borderRadius: 10,
        fontSize: 18,
        color: '#000000',
        backgroundColor: '#CCC'
    },
    button: {
        padding: 12,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#5BC0EB'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: "50",
    }
});