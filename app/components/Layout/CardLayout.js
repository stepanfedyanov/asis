import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Subtitle from '../UI/Subtitle';

const style = StyleSheet.create({
    fullBar: {
        borderRadius: '12px',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        width: '100%',
        minHeight: '25%',
        marginTop: '5%'
    },
    circleBarHalf: {
        borderRadius: '12px',
        backgroundColor: 'rgba(0, 0, 0, .4)',
        width: '48%',
        minHeight: '25%',
        marginTop: '5%'
    }
})

const CardLayout = (props) => {
    return (
        <View style={{width: '100%', marginTop: '5%'}}>
            <Subtitle title={props.title} />

            <View style={style[props.type]}>
                <Text>Some text</Text>
            </View>
        </View>
    )
};

export default CardLayout;