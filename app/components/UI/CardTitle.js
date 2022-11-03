import React from 'react';
import { Text } from 'react-native';
import { LIGHT_THEME } from '../../constants/color';

const CardTitle = (props) => {
    return (
        <Text style={{
            textAlign: 'left',
            fontSize: '16px',
            color: props.color,
            fontWeight: '400'
        }}>
            {props.title}
        </Text>
    )
};  

export default CardTitle;