import React from 'react';
import { Text } from 'react-native';
import { LIGHT_THEME } from '../../constants/color';

const Subtitle = (props) => {
    return (
        <Text style={{
            textAlign: 'left',
            fontSize: '22px',
            color: LIGHT_THEME.textColor,
            fontWeight: '400'
        }}>
            {props.title}
        </Text>
    )
};  

export default Subtitle;