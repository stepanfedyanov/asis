import React from "react";
import { View, Text } from "react-native";
import { LIGHT_THEME } from "../../constants/color";

import { GLOBAL_CSS } from "../../constants/styles";

const DetailedTable = (props) => {
    const title = props.name ? <Text style={GLOBAL_CSS.title2Bold}>{props.name}</Text> : '';
    const subtext = props.subtext ? <Text style={{...GLOBAL_CSS.caption1Regular, color: LIGHT_THEME.gray, marginTop: 20}}>{props.subtext}</Text> : '';

    return (
        <View style={{paddingTop: 30, minHeight: 100}}>
            {title}
            <View style={{marginTop: props.name ? 20 : 0}}>
                {props.children}
            </View>
            {subtext}
        </View>
    )
};

export default DetailedTable