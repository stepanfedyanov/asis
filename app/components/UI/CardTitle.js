import React from 'react';
import { Text } from 'react-native';
import { LIGHT_THEME } from '../../constants/color';
import { GLOBAL_CSS } from '../../constants/styles';

const CardTitle = (props) => {
    return (
        <Text style={{
            ...GLOBAL_CSS.calloutRegular,
            color: props.color,
            marginBottom: '5%'
        }}>
            {props.title}
        </Text>
    )
};  

export default CardTitle;