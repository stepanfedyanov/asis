import React from "react";
import { View, Text, Image, Button } from "react-native";
import { GLOBAL_CSS } from "../../constants/styles";
import Subtitle from "./Subtitle";

const Article = (props) => {
    return (
        <View onStartShouldSetResponder={() => props.navigation.navigate('browser', {uri: 'https://fedyanov.agency/'})} style={{marginTop: 10, marginBottom: 10, ...GLOBAL_CSS.articleCard}}>
            <Image source={{uri: 'https://fedyanov.agency/img/asis/why-sleep-is-so-important.png'}} style={{width: '100%', height: 150}} />
            <View style={{padding: 20}}>
                <Text style={{...GLOBAL_CSS.title3Bold}}>Почему сон так важен?</Text>
                <Text style={{...GLOBAL_CSS.bodyRegular, marginTop: 10}}>Узнайте о том, как сон помогает вам и вашему телу</Text>
            </View>
        </View>
    )
};

const NewsCategory = (props) => {
    return (
        <View style={{paddingTop: 20, minHeight: 600}}>
            <Subtitle title={props.title} />
            <Text style={{...GLOBAL_CSS.bodyRegular, marginTop: 10 }}>{props.text}</Text>
            {props.children}
        </View>
    )
};

export { Article, NewsCategory };