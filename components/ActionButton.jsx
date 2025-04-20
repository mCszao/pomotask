import { Pressable, StyleSheet, Text } from "react-native";

export default function ActionButton({active, displayName, change}) {
    return (
        <Pressable onPress={change} style={active ? titleStageStyles.buttonStages : null}>
        <Text style={titleStageStyles.textStages}>{displayName}</Text>
        </Pressable>
    )
}

const titleStageStyles = StyleSheet.create({
    buttonStages: {
        borderRadius: 10,
        backgroundColor: "#7D70BA"
      },
      textStages: {
        color: "#FFFFFF",
        fontWeight: "500",
        padding: 8
      },
});