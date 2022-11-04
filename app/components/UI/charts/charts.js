import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { LIGHT_THEME } from "../../../constants/color";

const styles = StyleSheet.create({
    topContainer: {
        width: '10%',
        position: 'relative'
    },
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    bar: {
        width: '100%',
        position: "absolute",
        bottom: '0%',
        left: '0%',
        backgroundColor: LIGHT_THEME.lightGray,
        height: '100%',
        borderTopRightRadius: '5px',
        borderTopLeftRadius: '5px',
        position: 'relative'
    },
    label: {
        position: 'absolute',
        bottom: '-40%',
        left: '20%'
        // transform: 'translateX(-50%)'
    }
});

const settingsLabels = {
    week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
}

const BarChart = (props) => {
    return (
        <View style={styles.container}>
            {
                props.data.map((e, i) => 
                    <View style={styles.topContainer}>
                        <Text style={styles.label}>{settingsLabels[props.labelType][i]}</Text>
                        <View key={i} 
                            style={
                                {
                                    ...styles.bar, 
                                    height: `${e / Math.max(...props.data) * 100}%`
                                }
                        }></View>
                    </View>
                )
            }
        </View>
    )
};

export {BarChart}