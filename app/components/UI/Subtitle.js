import React from 'react';
import { Text } from 'react-native';

const Subtitle = (props) => {
    return (
        <Text style={{
            textAlign: 'left',
            fontSize: '17px',
            color: '#fff',
            fontWeight: '500'
        }}>
            {props.title}
        </Text>
    )
};  

export default Subtitle;