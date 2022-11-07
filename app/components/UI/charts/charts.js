import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { LIGHT_THEME } from "../../../constants/color";
import { averageArray } from "../../../common/functions";
import { GLOBAL_CSS } from "../../../constants/styles";
import { endingWord } from "../../../common/functions";

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
        bottom: '0%',
        zIndex: '1', 
        left: '20%',
        
        // transform: 'translateX(-50%)'
    },
    averageContainer: {
        position: 'absolute',
        zIndex: '1',
        width: '100%',
        bottom: '0%',
        left: '0%',
        borderTopColor: LIGHT_THEME.darkGray,
        borderTopWidth: '3%',
    },
    averageText: {
        ...GLOBAL_CSS.caption2Bold,
        color: LIGHT_THEME.gray,
        position: 'absolute',
        top: '-40%',
        right: '0%'
    },
    horizontalBar: {
        flex: 1, 
        justifyContent: 'center', 
        paddingLeft: 7, 
        height: 35, 
        marginTop: 8, 
        borderRadius: 5, 
    }
});

const settingsLabels = {
    week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
}

const BarChart = (props) => {
    return (
        <View style={styles.container}>
            <View style={
                {
                    ...styles.averageContainer, 
                    height: averageArray(props.data) / Math.max(...props.data) * 100 + '%' 
                }
            }>
                <Text style={styles.averageText}>{averageArray(props.data)}</Text>
            </View>
            {
                props.data.map((e, i) => 
                    <View key={i} style={styles.topContainer}>
                        <Text style={{...styles.label, color: e === Math.max(...props.data) ? '#fff' : LIGHT_THEME.darkGray}}>{settingsLabels[props.labelType][i]}</Text>
                        <View style={
                                {
                                    ...styles.bar, 
                                    height: `${e / Math.max(...props.data) * 100}%`,
                                    backgroundColor: e === Math.max(...props.data) ? props.color : LIGHT_THEME.lightGray
                                }
                        }></View>
                    </View>
                )
            }
        </View>
    )
};

const HorizontalBarChart = (props) => {
    return (
        <View style={{width: '100%'}}>
            <Text>
                <Text style={{...GLOBAL_CSS.headlineBold, marginRight: '1%'}}>{props.data[0].value} </Text>
                <Text style={{...GLOBAL_CSS.headlineBold, color: LIGHT_THEME.gray}}>
                    {endingWord(props.data[0].type, props.data[0].value)}
                </Text>
            </Text>

            <View style={{...styles.horizontalBar, width: '100%', backgroundColor: props.color}}>
                <Text style={{color: '#FFF', ...GLOBAL_CSS.caption1}}>Сегодня</Text>
            </View>
            
            <Text style={{marginTop: 10}}>
                <Text style={{...GLOBAL_CSS.headlineBold, marginRight: '1%'}}>{props.data[1].value} </Text>
                <Text style={{...GLOBAL_CSS.headlineBold, color: LIGHT_THEME.gray}}>
                    {endingWord(props.data[0].type, props.data[0].value)}
                </Text>
            </Text>

            <View style={{...styles.horizontalBar, width: `${props.data[1].value / props.data[0].value * 100}%`, backgroundColor: LIGHT_THEME.lightGray}}>
                <Text style={{color: LIGHT_THEME.gray, ...GLOBAL_CSS.caption1Regular}}>Обычно</Text>
            </View>

        </View>
    )
};

export {BarChart, HorizontalBarChart}