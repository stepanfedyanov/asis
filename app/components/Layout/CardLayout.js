import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LIGHT_THEME } from "../../constants/color";
import Subtitle from '../UI/Subtitle';
import CardTitle from "../UI/CardTitle";

const cardStyle = {
    borderRadius: '12px',
    backgroundColor: LIGHT_THEME.cardBg,
    width: '100%',
    marginTop: '5%',
    padding: '5%'
};

const style = StyleSheet.create({
    1: {
        ...cardStyle,
        minHeight: '20%'
    },
    2: {
        ...cardStyle
    }
})

const CardLayout = (props) => {
    return (
        <View style={{width: '100%', marginTop: '10%'}}>
            <Subtitle title={props.title} />

            <View style={style[props.data.type]}>
                <CardTitle title={props.data.cardTitle} color={LIGHT_THEME.red} />

            </View>
        </View>
    )
};

export default CardLayout;