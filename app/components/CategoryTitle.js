import React from "react";
import { Text } from "react-native";
import { GLOBAL_CSS } from "../constants/styles";

const CategoryTitle = (props) => {
    return (
        <Text style={{...GLOBAL_CSS.title2Bold, marginTop: 30}}>{props.title}</Text>
    )
};

export default CategoryTitle
