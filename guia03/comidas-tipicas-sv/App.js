import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const DATA = [
  {
  id: '1',
  title: 'Elote Loco',
  description: 'Se cocinan los elotes en agua hasta que los granos estén blandos; se les debe insertar un palillo a lo largo de la mazorca para sostenerla fácilmente. Al estar listos, se bañan con salsa mayonesa, se les agrega un poco de mostaza, unas líneas de salsa de tomate y finalmente, otras de salsa negra. Para culminar, el elote se espolvorea con queso rallado.',
  src:require('../comidas-tipicas-sv/assets/eloteloco.png'),
  },
  {
  id: '2',
  title: 'Pupusas',
  description: 'Las pupusas son el platillo más representativo de la cocina salvadoreña. Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.',
  src:require('../comidas-tipicas-sv/assets/pupusas.webp'),
  },
  {
  id: '3',
  title: 'Riguas',
  description: 'Son tortas fritas hechas con masa de elotes condimentada y envueltas en hojas de elote o plátano. Se comen con queso y crema.',
  src:require('../comidas-tipicas-sv/assets/riguas.jpg'),
  },
  {
  id: '4',
  title: 'Tamales',
  description: 'Las pupusas son el platillo más representativo de la cocina salvadoreña. Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.',
  src:require('../comidas-tipicas-sv/assets/tamales.jpg'),
  },
  {
  id: '5',
  title: 'Atol de Elote',
  description: 'Las pupusas son el platillo más representativo de la cocina salvadoreña. Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa.',
  src:require('../comidas-tipicas-sv/assets/atolelote.jpg'),
  },
  ];

  const Item = ({title, description, img})=>(
    <Card style={styles.container}>
    <Card.Content style={styles.fila} >
    <View style={styles.containerImg}>
    <Card.Cover style={styles.image} source={img} />
    </View>
    <View >
    <Title style={styles.title} >{title} </Title>
    <Paragraph style={styles.contenido} >{description}
    </Paragraph>
    </View>
    </Card.Content>
    </Card>
  );

const  App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} img={item.src} />
    );
  return (
    <SafeAreaView style={styles.containerg}>
    <Text style={styles.titulo}>Comidas Típicas SV</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerg: {
    flex: 1,
    alignItems:'center',
    textAlign:'center',
    padding: 8,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection:'column',
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fila:{
    flex:1,
    flexDirection:'row',
  },
  image:{
    marginHorizontal:5,
    width:90,
    height:90,
    borderRadius:50,
  },
  contenido:{
    width:225,
    fontSize:9,
    textAlign:'justify',
  },
   title:{
    fontSize:14,
    fontWeight:'bold',
  },
  containerImg:{
    alignItems:'center',
    paddingVertical:20,
  },
  titulo:{
    fontSize:25,
    padding:20,
  },
});

export default App;
