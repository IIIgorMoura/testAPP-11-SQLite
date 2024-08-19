import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export function Produto({ data, onDelete, onPressItem }) {
    const [itemPressionado, setItemPressionado] = useState(false);

    return (
        <Pressable
            onPress={() => {
                setItemPressionado(!itemPressionado);
                onPressItem(data); // Chama a função de callback ao pressionar o item
            }}
            style={[styles.container, itemPressionado && styles.pressedContainer]}
        >
            <Text style={styles.text}>
                {data.quantidade} - {data.nome}
            </Text>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#CECECE",
    },
    pressedContainer: {
        borderColor: 'blue',
        borderWidth: 2,
    },
    text: {
        flex: 1,
    },
});