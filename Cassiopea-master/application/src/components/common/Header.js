//Import libraries for making component header
import React from 'react';
import { Text, View } from 'react-native';


//make the component Header, with a prop for the text, called headerText
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
       <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//Styling du header:
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //Position verticalement
    alignItems: 'center', //Position horizontalement
    height: 60, //hauteur du bloc, en pixels
    paddingTop: 15, //marge par rapport au haut de l'écran (pour laisser l'heure)
    //Ajout d'une ombre en bas du bloc, plutôt qu'une border:
    shadowColor: '#000', //noir
    shadowOffset: { width: 0, height: 2 }, // dimensions hor. et ver. de l'ombre
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//make the component available to other parts of the app
export { Header };
