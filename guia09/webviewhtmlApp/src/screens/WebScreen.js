import React,{useState} from "react";
import { StyleSheet } from "react-native";
import {WebView} from 'react-native-webview'
import {useAssets} from 'expo-asset'
import {readAsStringAsync} from 'expo-file-system'
const WebScreen = () =>
{

    const [index, indexLoadingError] = useAssets(
        require("../resources/Example.html")
      );
    
      const [html, setHtml] = useState("");
    
      if (index) {
        readAsStringAsync(index[0].localUri).then((data) => {
            setHtml(data);
        });
      }

    return(
        <WebView 
            source={{html}}
            style={Styles.WebView}
        />
    )
}

export default WebScreen
const Styles = StyleSheet.create({
    WebView:{
        fontSize:20,
        flex:1,
    }
})