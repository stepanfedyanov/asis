import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LIGHT_THEME } from "../../constants/color";
import { GLOBAL_CSS } from "../../constants/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 5,
        width: '100%',
        height: 50,
        // backgroundColor: '#000'
    },
    icon: {
        marginLeft: 3
    }
});

const TableView = (props) => {
    const subtext = props.subtext ? <Text style={{...GLOBAL_CSS.caption1Regular, color: LIGHT_THEME.gray}}>{props.subtext}</Text> : '';

    return (
        <View onStartShouldSetResponder={
            () => { 
                if (props.to) { 
                    props.to.navigate('data', 
                    {
                        screen: 'data_page',
                        params: {
                            datatype: props.dataGroup
                        }
                    }) 
                } 
            } 
        } style={styles.container}>
            <Ionicons style={{...styles.icon, marginRight: 10}} name={props.icon} size={22} color={LIGHT_THEME[props.dataGroup]} />
            <View>
                <Text style={GLOBAL_CSS.bodyRegular}>{props.text}</Text>   
                {subtext}
            </View>
        </View>
    )
};

export default TableView;