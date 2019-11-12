import { Component } from 'react';
//import { View, Text } from 'react-native';
import { noteToObjet } from './GammesList';
import { renderMancheGuitare } from './MancheGuitare';

class TestManche extends Component {
  render() {
    const { noteparent, gamme } = this.props;

    console.log('coucou1', noteparent, gamme);

    const note = noteToObjet(noteparent);

    console.log('coucou2', note, gamme);

    //Ici on fera return renderMancheGuitare(gamme, note);
    return renderMancheGuitare(gamme, note);
    /*return (
      <View>

        <Text>{gamme.nomGamme}</Text>
        <Text>{note.nomNote}</Text>
      </View>
    );
    */
  }
}

export default TestManche;
