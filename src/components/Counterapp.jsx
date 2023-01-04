import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Counterapp() {
    const [num, setNum] = useState(0);

    const incr = () => {
        setNum(num + 1);
    }
    const decr = () => {
        if (num < 0)
            alert("cannot be less than 0")
        setNum(num - 1);
    }
    const reset = () => {
        if (num == 0)
            alert("Number is already 0")
        setNum(0);
    }
    return (
        <View>
            <Text style={styles.num}>
                {num}

            </Text>

            <Button title="+1" onPress={incr} style={styles.btn} />
            <Button title="Reset" onPress={reset} style={styles.btn} />
            <Button title="-1" onPress={decr} style={styles.btn} />
        </View>
    )
}
const styles = StyleSheet.create({
    num: {
        padding: 10,
        backgroundColor: "cyan",
        fontSize: 40,
        width: 80,
        textAlign: "center",
        borderRadius: 10
    },
    btn: {
        backgroundColor: "black",
        padding: 20,
        margin: 10
    }
})