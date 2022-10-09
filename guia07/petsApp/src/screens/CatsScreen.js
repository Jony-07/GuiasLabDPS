import React from "react";
import { View, Text, FlatList, ScrollView, Image } from "react-native";
import globalStyles from "../styles/GlobalStyle";
const Item = ({ title, origen, img }) => (
    <View style={globalStyles.Subcontainer} >
      <View style={globalStyles.ImageContainer}>
      <Image style={globalStyles.Imgs} source={img}/>
      </View>
      <View style={globalStyles.TextContaner}>
      <Text style={globalStyles.titulo} >{title}</Text>
      <Text>{origen}</Text>
      </View>
    </View>
  );
  const DATA = [
    {
        id:'1',
        title:'Gato Balinés',
        origen:'Estados Unidos',
        src:require('../images/c1.jpeg'),
    },
    {
        id:'2',
        title:'Gato de Bengala',
        origen:'Estados Unidos',
        src:require('../images/c2.webp'),
    },
    {
        id:'3',
        title:'Birmano',
        origen:'Francia',
        src:require('../images/c3.webp'),
    },
    {
        id:'4',
        title:'Bosque de Noruega',
        origen:'Noruega',
        src:require('../images/c4.webp'),
    },
    {
        id:'5',
        title:'Fold Escocés',
        origen:'Escocia / Reino Unido',
        src:require('../images/c5.jpg'),
    }
];
export default function Cats()
{
    const renderItem = ({ item }) => (
        <Item title={item.title} origen={item.origen} img={item.src} />
      );
    
        return(
          <View style={globalStyles.contenedor}>
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
          </View>  
        );
};