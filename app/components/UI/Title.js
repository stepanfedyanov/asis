import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = (props) => {
    return (
        <Text style={{
            textAlign: 'left',
            fontSize: '34px',
            color: '#fff'
        }}>
            {props.title}
        </Text>
    )
};  

export default Title;