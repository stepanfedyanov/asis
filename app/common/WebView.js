import React, {useState} from "react";
import { WebView } from 'react-native-webview';


const WebViewUI = ({navigation, route}) => {
    return (
        <WebView
            source={{ uri: route.params.uri }}
        />
    )
};

export default WebViewUI;