import React, { useState } from 'react';
import {View, StyleSheet,Image, ScrollView, Text, Modal, Button, TouchableHighlight} from 'react-native';
const App = () =>{
    const[modalVisibleh1, setModalVisibleh1]=useState(false);
    const[modalVisibleh2, setModalVisibleh2]=useState(false);
    const[modelVisiblei1,setModalVisiblei1]= useState(false);
    const[modelVisiblei2,setModalVisiblei2]= useState(false);
    const[modelVisiblei3,setModalVisiblei3]= useState(false);
    const[modelVisiblei4,setModalVisiblei4]= useState(false);
    const[modalVisibleservices, setModalVisibleservices] = useState(false);
 return(
 <>
 <ScrollView style={styles.container}>
 <Modal transparent={true} animationType="slide" visible={modalVisibleh1} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>

    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitación Estándar</Text>
            <Text  style={styles.textoContenido}>Esta habitación se trata de una habitación para dos personas con máximo de cuatro
            , pero en este caso con dos camas doble.</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/h1.jpg')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisibleh1(!modalVisibleh1)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modalVisibleservices} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
  <ScrollView>
  <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Servicios del Hotel</Text>
            <Text  style={styles.textoContenido}>Aparatos de gimnasia:  El hotel ofrece aparatos de gimnasia o equipos de hacer ejercicio</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/s1.jpg')}
        />
         <Text  style={styles.textoContenido}>Restaurantes al aire libre</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/s2.jpg')}
        />
        <Text  style={styles.textoContenido}>Alquiler de lanchas</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/s3.jpg')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisibleservices(!modalVisibleservices)}}></Button>
        </View>
    </View>
  </ScrollView>
   
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modalVisibleh2} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitación Súper</Text>
            <Text  style={styles.textoContenido}>Esta habitación trata de una habitación para un máximo de cuatro personas, con dos camas dobles,
            que cuenta con mejores vistas a las piscinas y a la naturaleza, con comedores más cercanos</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/h2.jpg')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisibleh2(!modalVisibleh2)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modelVisiblei1} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Playa el Carrizal</Text>
            <Text style={styles.textoContenido}>El Dique El Carrizal es un embalse emblemático para todos los mendocinos. Luján Playa carrizal es el espacio indicado para disfrutar del agua, 
            actividades deportivas y esparcimiento al aire libre. 
            El complejo ofrece tres piletas y bajada al espejo de agua.</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/i1.jpg')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisiblei1(!modelVisiblei1)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modelVisiblei2} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Punta el Mango</Text>
            <Text style={styles.textoContenido}>Punta Mango es una playa mítica, ubicada en el oriental departamento de San Miguel. 
            Hasta hace poco conocida solo por unos pocos afortunados, ahora se encuentra en la lista de deseos de cualquier surfista aventurero.</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/i2.jpeg')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisiblei2(!modelVisiblei2)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modelVisiblei3} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Playa el Toro</Text>
            <Text style={styles.textoContenido}>La playa el Toro es otra que se puede encontrar en el recorrido de la Punta del Mango,
            es algo pequeño, pero un lugar mágico para estar y practicar surf</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/i3.webp')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisiblei3(!modelVisiblei3)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modelVisiblei4} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Playa las Flores</Text>
            <Text style={styles.textoContenido}>La pequeña y hermosa ensenada que recibe al viajero, marca el inicio de una serie de puntas rocosas, con olas de rompiente derecha, perfectas para la práctica del surf, 
            que se extienden una tras otra por varios kilómetros, desde el oriente de la costa salvadoreña hacia el occidente.</Text>
            <Image
            style={styles.mejores}
            source={require('./src/img/i4.jpg')}
        />
            <Button title='Cerrar' onPress={()=>{ setModalVisiblei4(!modelVisiblei4)}}></Button>
        </View>
    </View>
 </Modal>
 <Text style={styles.titulo}> Hotel: Los Mangos </Text>
 <View style={{flexDirection:'row'}} >
 <ScrollView horizontal>
 <Image
 style={styles.banner}
 source={require('./src/img/bg.jpg')} />
  <Image
 style={styles.banner}
 source={require('./src/img/bg2.jpg')} />
  <Image
 style={styles.banner}
 source={require('./src/img/bg3.jpg')} />
  <Image
 style={styles.banner}
 source={require('./src/img/bg4.jpg')} />
 </ScrollView>

 </View>
<View style={styles.contenedor}>
<Text style={styles.titulo}>Tipos de Habitaciones</Text>
    <ScrollView horizontal>
    <View>
    <TouchableHighlight onPress={()=>{setModalVisibleh1(!modalVisibleh1)}}>
    <Image
            style={styles.ciudad}
            source={require('./src/img/h1.jpg')}
        />
    </TouchableHighlight>
    </View>
    <View>
    <TouchableHighlight onPress={()=>{setModalVisibleh2(!modalVisibleh2)}}>
    <Image
            style={styles.ciudad}
            source={require('./src/img/h2.jpg')}
        />
    </TouchableHighlight>
    </View>
    </ScrollView>
    <View>
    <Text style={styles.titulo}>Servicios</Text>
    <View>
    <TouchableHighlight onPress={()=>{setModalVisibleservices(!modalVisibleservices)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/s.jpg')}
        />
    </TouchableHighlight>

    </View>
    </View>
    <Text style={styles.titulo}>Lugares de Interés</Text>
    <View style={styles.listado}>
    <View style={styles.listaItem}>
    <TouchableHighlight onPress={()=>{setModalVisiblei1(!modelVisiblei1)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/i1.jpg')}
        />
    </TouchableHighlight>

    </View>
    <View style={styles.listaItem}>
    <TouchableHighlight onPress={()=>{setModalVisiblei2(!modelVisiblei3)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/i2.jpeg')}
        />
    </TouchableHighlight>

    </View>
    <View style={styles.listaItem}>
    <TouchableHighlight onPress={()=>{setModalVisiblei3(!modelVisiblei3)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/i3.webp')}
        />
    </TouchableHighlight>

    </View>
    <View style={styles.listaItem}>
    <TouchableHighlight onPress={()=>{setModalVisiblei4(!modelVisiblei4)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/i4.jpg')}
        />
    </TouchableHighlight>

        
    </View>
    </View>
</View>
</ScrollView>
</>
 );
};
const styles = StyleSheet.create({
banner:{
 height:225,
 width:335,
 flex:1,
},
vistaModal:{
    backgroundColor:'#000000aa',
    flex:1,
},
textoContenido:{
    marginVertical:10,
    justifyContent:'center',
    fontSize:14
},
Modal:{
    backgroundColor:'#cbf3f0',
    margin:50,
    padding:40,
    borderRadius:25,
    flex:1,
},
subtitulo:{
    fontWeight:'bold',
    fontSize:17,
    justifyContent:'center',
    marginVertical:10
},
listaItem:{
flexBasis:'49%'
},
listado:{
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-between'
},
mejores:{
width:'100%',
height:200,
marginVertical:5,
borderRadius:25
},
titulo:{
fontWeight:'bold',
fontSize:25,
color:'#1d3557',
marginVertical:10,
},
contenedor:{
marginHorizontal:10,

},
ciudad:{
    width:250,
    height:300,
    marginRight:10
},
container:{
  backgroundColor:'#bee9e8'
}
});
export default App;