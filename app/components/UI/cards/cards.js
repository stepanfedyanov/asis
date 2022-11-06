import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GRADIENTS, LIGHT_THEME } from "../../../constants/color";
import Subtitle from '../Subtitle';
import CardTitle from "../CardTitle";

import { GLOBAL_CSS } from "../../../constants/styles";

import { averageArray, endingWord } from "../../../common/functions";
import { BarChart, HorizontalBarChart } from "../charts/charts";

const style = StyleSheet.create({
    1: {
        ...GLOBAL_CSS.cardStyle,
        minHeight: '25%'
    },
    2: {
        ...GLOBAL_CSS.cardStyle,
        minHeight: '13%'
    },
    3: {
        ...GLOBAL_CSS.cardStyle,
        minHeight: '20%'
    }
})

const Card1 = (props) => {
    let title;

    if (props.title) { 
        title = <Subtitle title={props.title} />
    }

    return (
        <View style={{width: '100%', marginTop: '10%'}}>
            {title}

            <View style={style[1]}>
                <CardTitle title={props.data.cardTitle} color={LIGHT_THEME[props.data.dataType]} />
                <Text style={{...GLOBAL_CSS.footnoteBold, marginBottom: '3%'}}>Средний результат за последнюю неделю: {averageArray(props.data.chart)} очков</Text>

                <BarChart style={{width: "100%"}} data={props.data.chart} labelType='week' color={LIGHT_THEME[props.data.dataType]}/>

            </View>
        </View>
    )
};

const Card2 = (props) => {
    let title;

    if (props.title) { 
        title = <Subtitle title={props.title} />
    }

    return (
        <View style={{width: '100%', marginTop: '10%'}}>
            {title}

            <View style={style[2]}>
                <CardTitle title={props.data.cardTitle} color={LIGHT_THEME[props.data.dataType]} />

                <View style={{flex: 1, flexDirection: 'row'}}>
                    {
                        props.data.datas.map((e, i) => 
                        <Text key={i} style={{marginRight: '5%'}}>
                            <Text style={{...GLOBAL_CSS.headlineBold, marginRight: '1%', color: LIGHT_THEME[e.group]}}>{e.value} </Text>
                            <Text style={{...GLOBAL_CSS.headlineBold, color: LIGHT_THEME.gray}}>{endingWord(e.type, e.value)}</Text>
                        </Text>
                        )
                    }
                </View>
            </View>
        </View>
    )
};

const Card3 = (props) => {
    let title;

    if (props.title) { 
        title = <Subtitle title={props.title} />
    }

    return (
        <View style={{width: '100%', marginTop: '10%'}}>
            {title}

            <View style={style[3]}>
                <CardTitle title={props.data.cardTitle} color={LIGHT_THEME[props.data.dataType]} />

                <HorizontalBarChart style={{width: "100%"}} data={props.data.datas} color={LIGHT_THEME[props.data.dataType]} />
            </View>
        </View>
    )
};

export { Card1, Card2, Card3 };