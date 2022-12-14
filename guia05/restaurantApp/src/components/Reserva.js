import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ({item, eliminarPaciente}) => {
    const dialogoEliminar = id => {
    console.log('eliminando....', id);
    eliminarPaciente(id);
    }

    return (
        <View style={styles.cita}>
        <View>
        <Text style={styles.label}>Cliente: </Text>
        <Text style={styles.texto}>{item.cliente}</Text>
        </View>
        <View>
        <Text style={styles.label}>Número de Personas: </Text>
        <Text style={styles.texto}>{item.personas}</Text>
        </View>
        <View>
        <Text style={styles.label}>Seccion: </Text>
        <Text style={styles.texto}>{item.seccion}</Text>
        </View>
        <View>
        <Text style={styles.label}>Fecha de Reserva: </Text>
        <Text style={styles.texto}>{item.fecha}</Text>
        </View>
        <View>
        <Text style={styles.label}>Creación de Reserva / Hora de Reserva: </Text>
        <Text style={styles.texto}>{item.hora}</Text>
        </View>
        <View>
        <TouchableHighlight onPress={ () => dialogoEliminar(item.id) }
       style={styles.btnEliminar}>
        <Text style={styles.textoEliminar}> Cancelar &times; </Text>
        </TouchableHighlight>
        </View>
       
        </View>
        )
    }
    const styles = StyleSheet.create({
     cita: {
     backgroundColor: '#b9faf8',
     borderBottomColor: '#0a1128',
     borderStyle: 'solid',
     borderBottomWidth: 1,
     paddingVertical: 20,
     paddingHorizontal: 10,
     borderRadius:25
     },
     label: {
     fontWeight: 'bold',
     fontSize: 18,
     marginTop: 20
     },
     texto: {
     fontSize: 18,
     },
     btnEliminar: {
     padding: 10,
     backgroundColor: 'red',
     marginVertical: 10
     },
     textoEliminar: {
     color: '#FFF',
     fontWeight: 'bold',
     textAlign: 'center'
     }
    })
    export default Cita;
    