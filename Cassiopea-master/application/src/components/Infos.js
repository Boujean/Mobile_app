import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Infos = (props) => {

  return (
    <View
        style={{
                width,
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                paddingBottom: 20,
                backgroundColor: '#EEEEEE'
              }}
    >
    <ScrollView >
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{"Informations:\n"}</Text>
        <Text style={{ textAlign: 'justify' }}>{"Cette application vous permet de jouer plusieurs modes-gammes sur un accord donné hors contexte harmonique. \n \nPour en savoir plus, le livre complet sur tous les éléments d'improvisation à la guitare disponible aux éditions Omnis Musica chez :\n"}
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL('http://www.di-arezzo.fr/livre/produit-musical/pédagogie-instrumentale/livre-pour-guitare/Eric-Gautier/Improvisation-Guitare---LEssentiel/OMNIS00006.html?PHPSESSID=3ecd93b2da0e51c5ba90c96c626e3b0b')}>
          <Text style={{ color: '#007aff', textAlign: 'center' }}>
            Di-Arezzo
            {"\n"}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => Linking.openURL('https://m.woodbrass.com/index.php?whattodo=parcour_recherche&categ_id=2074&categ_name=Jazz%20-%20improvisation&recherche=omnis%20musica')}>
          <Text style={{ color: '#007aff', textAlign: 'center' }}>
            Woodbrass
            {"\n"}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => Linking.openURL('https://www.amazon.fr/gp/aw/d/2955635618/253-3584346-1359552?ref=olp_product_details')}>
          <Text style={{ color: '#007aff', textAlign: 'center' }}>
            Amazon
            {"\n"}
          </Text>
        </TouchableOpacity>

        <Text style={{ textAlign: 'justify' }}>


          {"\n"}{"Passez en mode PRO et retrouvez la liste complète des modes, gammes, toutes les positions sur le manche, les accords, les substitutions, les contextes harmoniques, chiffrages... Prochainement sur l'App store et Google Play."}

          {"\n"}{"\n"}
        </Text>
        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Auteur:</Text>
        <Text style={{ textAlign: 'center' }}>Eric Gautier</Text>

        <TouchableOpacity onPress={() => Linking.openURL('http://www.ericgautierguitar.com')}>
          <Text style={{ color: '#007aff', textAlign: 'center' }}>
            ericgautierguitar.com
          </Text>
        </TouchableOpacity>


        <Text style={{ textAlign: 'center' }}>
          {"\n"}{"\n"}
          <Text style={{ fontWeight: 'bold' }}>Développeurs:</Text>
          {"\n"}Olivier Freyssinet, Lucas Montorio
          {"\n"} & Jean Puigrenier

          {"\n"}
        </Text>
        <Text style={{ textAlign: 'center', fontStyle: 'italic' }}>Copyright 2017</Text>
      </ScrollView>
    </View>
  );
};

export default Infos;
