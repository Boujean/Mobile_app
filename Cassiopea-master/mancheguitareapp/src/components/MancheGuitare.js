import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../components/Header';
import Reperes from './Reperes';
import ReperesNumerotes from './ReperesNumerotes';
import Corde from './Corde';
import constructGammeAbsolueFromNote from '../dataGetters/constructeurDesGammes';

const renderMancheGuitare = (gamme, note) => {
  const { notesAAfficher } = constructGammeAbsolueFromNote(gamme, note);
  const nomTonique = note.nomNote;
  const nomGamme = gamme.nomGamme;
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={`${nomTonique}     ▻      ${nomGamme}`} />
      <MancheGuitare
      notesAAfficher={notesAAfficher}
      toutesPositions={note.toutesPositions}
      />
    </View>
  );
};


const MancheGuitare = (props) => {
  const { corde1, corde2, corde3, corde4, corde5, corde6 } = props.notesAAfficher;
  const {
    noteSurCorde1, noteSurCorde2, noteSurCorde3,
    noteSurCorde4, noteSurCorde5, noteSurCorde6
  } = props.toutesPositions;
  const { containerStyle } = styles;
  return (
    <ScrollView contentContainerStyle={containerStyle}>
      <ReperesNumerotes />
      <Reperes />
      <Corde numCorde={1} notesAAfficherSurCorde={corde1} tsurcorde={noteSurCorde1} />
      <Corde numCorde={2} notesAAfficherSurCorde={corde2} tsurcorde={noteSurCorde2} />
      <Corde numCorde={3} notesAAfficherSurCorde={corde3} tsurcorde={noteSurCorde3} />
      <Corde numCorde={4} notesAAfficherSurCorde={corde4} tsurcorde={noteSurCorde4} />
      <Corde numCorde={5} notesAAfficherSurCorde={corde5} tsurcorde={noteSurCorde5} />
      <Corde numCorde={6} notesAAfficherSurCorde={corde6} tsurcorde={noteSurCorde6} />
    </ScrollView>
  );
};


const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#9C7C60'
  }
};


export default renderMancheGuitare;
