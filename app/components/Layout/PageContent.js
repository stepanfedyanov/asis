import React from "react";
import { View, StyleSheet } from "react-native";

const style = StyleSheet.create({
    pageWrapper: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'flex-start'
    }
});

const PageContent = (props) => {
    return (
        <View style={style.pageWrapper}>
            {props.children}
        </View>
    )
};

export default PageContent;