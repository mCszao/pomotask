import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TaskItem({ task, onDelete, onDoneUpdate }) {
    const handleDelete = () => {
        onDelete(task.label);
    }

    const handleDone = () => {
        onDoneUpdate(task.label);
    }

    return (
        <View style={styles.area}>
            <Pressable onPress={handleDone}>
                <View style={[styles.check, task.done ? styles.checked : styles.unchecked]}></View>
            </Pressable>
            <Text style={styles.text}>{task.label}</Text>
            <Pressable onPress={handleDelete}>
                <Text>Excluir</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    area: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCC',
        padding: 20,
        margin: 10,
        borderRadius: 10
    },
    text: {
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10
    },
    check: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#FFF'
    },
    checked: {
        backgroundColor: '#000'
    },
    unchecked: {
        backgroundColor: '#FFF'
    }
});