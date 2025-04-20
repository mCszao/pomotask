import { StyleSheet, Text } from "react-native"

export default function Timer({timerValue}) {
    const dateValue = new Date(timerValue * 1000);
    const options = {minute: "2-digit", second: "2-digit"}
    return (
        <Text style={timerStyles.timer}>{dateValue.toLocaleTimeString("pt-BR", options)}</Text>
    )
}

const timerStyles = StyleSheet.create({
    timer: {
        color: "#FFFFFF",
        fontSize: 54,
        fontWeight: "bold",
        textAlign: "center",
      },
})