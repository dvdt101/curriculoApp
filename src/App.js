import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FotoSrc from './assets/david.jpeg';
import Card from './components/card/';

const App = () => {
  const handleRedesSociais = (rede_social) => {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('https://www.linkedin.com/in/david-tavares-b17b59166/');
        break;
      case 'github':
        Alert.alert('github.com/dvdt101');
        break;
      case 'instagram':
        Alert.alert('https://www.instagram.com/davidtavares100/');
        break;
    }
  };
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container_cabecalho}>
          <Image source={FotoSrc} style={styles.foto} />
          <Text style={styles.nome}>DAVID TAVARES</Text>
          <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedesSociais('github')}>
              <Icon name="github" size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedesSociais('instagram')}>
              <Icon name="instagram" size={30}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedesSociais('linkedin')}>
              <Icon name="linkedin" size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <Card titulo="Experiencia profissional">
          <Text style={styles.card_content_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque
            erat, accumsan a ipsum et, gravida mattis justo. In vehicula nibh
            non scelerisque vestibulum. Donec dictum commodo arcu. Sed dignissim
            ultrices orci ac ullamcorper. In ornare, lectus ac vulputate cursus,
            orci ipsum bibendum eros, in auctor erat nibh ut velit.
          </Text>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});

export default App;
