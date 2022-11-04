import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LIGHT_THEME } from "../../../constants/color";
import Subtitle from '../Subtitle';
import CardTitle from "../CardTitle";

import { GLOBAL_CSS } from "../../../constants/styles";

import { averageArray } from "../../../common/functions";
import { BarChart } from "../charts/charts";

const style = StyleSheet.create({
    1: {
        ...GLOBAL_CSS.cardStyle,
        minHeight: '20%'
    },
    2: {
        ...GLOBAL_CSS.cardStyle
    }
})

const Card1 = (props) => {
    return (
        <View style={{width: '100%', marginTop: '10%'}}>
            <Subtitle title={props.title} />

            <View style={style[1]}>
                <CardTitle title={props.data.cardTitle} color={LIGHT_THEME.red} />
                <Text style={GLOBAL_CSS.footnoteBold}>Средний результат за последнюю неделю: {averageArray(props.data.chart)} очков</Text>

                <BarChart style={{width: "100%"}} data={props.data.chart} labelType='week'/>
            </View>
        </View>
    )
};

export { Card1 };