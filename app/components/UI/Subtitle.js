import React from 'react';
import { Text } from 'react-native';
import { LIGHT_THEME } from '../../constants/color';
import { GLOBAL_CSS } from '../../constants/styles';

const Subtitle = (props) => {
    return (
        <Text style={{
            ...GLOBAL_CSS.title3Regular,
            color: LIGHT_THEME.textColor
        }}>
            {props.title}
        </Text>
    )
};  

export default Subtitle;