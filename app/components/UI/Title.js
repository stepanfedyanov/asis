import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LIGHT_THEME } from '../../constants/color';
import { GLOBAL_CSS } from '../../constants/styles';

const Title = (props) => {
    return (
        <Text style={{
            ...GLOBAL_CSS.title1Bold,
            color: LIGHT_THEME.textColor
        }}>
            {props.title}
        </Text>
    )
};  

export default Title;