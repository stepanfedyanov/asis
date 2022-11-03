import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LIGHT_THEME } from '../../constants/color';

const Title = (props) => {
    return (
        <Text style={{
            textAlign: 'left',
            fontSize: '28px',
            fontWeight: '700',
            color: LIGHT_THEME.textColor
        }}>
            {props.title}
        </Text>
    )
};  

export default Title;