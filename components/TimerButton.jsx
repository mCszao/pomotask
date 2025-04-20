import { Text, Pressable, StyleSheet } from "react-native";

export default function TimerButton({isRunning, func}) {
    return (
        <Pressable style={!isRunning ? styles.buttonOn : styles.buttonOff} onPress={() => func()}>
            <Text style={styles.textButton}>{isRunning ? "PAUSAR" : "COMEÇAR"}</Text>
      </Pressable>
      );
}

const styles = StyleSheet.create({
    buttonOn: {
        backgroundColor: "#5BC0EB",
        padding: 10,
        borderRadius: 32, 
      },
      buttonOff: {
        backgroundColor: "#212738",
        padding: 10,
        borderRadius: 32, 
      },
      textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 18
      }
})