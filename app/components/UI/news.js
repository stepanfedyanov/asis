import React from "react";
import { View, Text, Image, Button } from "react-native";
import { GLOBAL_CSS } from "../../constants/styles";
import Subtitle from "./Subtitle";

const Article = (props) => {
    return (
        <View>
            {props.data.map((e, i) => 
                <View key={i} onStartShouldSetResponder={() => props.navigation.navigate('browser', {uri: e.uri})} style={{marginTop: 10, marginBottom: 10, ...GLOBAL_CSS.articleCard}}>
                    <Image source={{uri: e.img}} style={{width: '100%', height: 150}} />
                    <View style={{padding: 20}}>
                        <Text style={{...GLOBAL_CSS.title3Bold}}>{e.name}</Text>
                        <Text style={{...GLOBAL_CSS.bodyRegular, marginTop: 10}}>{e.description}</Text>
                    </View>
                </View>
            )}
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