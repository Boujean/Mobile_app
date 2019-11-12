import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common/CardSection';
import { fa, faDiese, sol, solDiese, la,
  siBemol, si, doo, doDiese, re, miBemol, mi } from '../data/Notes.js';
import { accordMajeur, accordM7, accordMineur, accordMoins7,
  accord7, accord7alt, accordMoins7b5, accord7barre, accord7sus4,
  accordMoinsM7, accordM7Diese11, accordPlusM7 } from '../data/Typesaccord.js';
import {modeIonien, modeIonien1,modeIonien2,modeIonien3, modeLydien, modeLydien1, modeLydien2, modeLydien3, modeDorien ,modeDorien1, modeDorien2, modeDorien3,
        modePhrygien, modePhrygien1,modePhrygien2, modePhrygien3, modeMixolydien, modeMixolydien1, modeMixolydien2, modeMixolydien3, modeAeolien, modeAeolien1, modeAeolien2, modeAeolien3,
        modeLocrien, modeLocrien1, modeLocrien2, modeLocrien3, modeMineurMelodique, modeMineurMelodique1, modeMineurMelodique2, modeDorienb2, modeDorienb21, modeDorienb22,
        modeLydienDiese5, modeLydienDiese51, modeLydienDiese52, modeLydienb7, modeLydienb71, modeLydienb72, modeMixolydienb6, modeMixolydienb61, modeMixolydienb62, modeLocrienBecarre2, modeLocrienBecarre21, modeLocrienBecarre22,
        modeSuperlocrien, modeSuperlocrien1, modeSuperlocrien2, modeMineurHarmonique, modeMineurHarmonique1, modeMineurHarmonique2, modeLocrien6, modeLocrien61, modeLocrien62, modeIonienDiese5, modeIonienDiese51, modeIonienDiese52,
        modeDorienDiese4, modeDorienDiese41, modeDorienDiese42, modeSuperphrygien, modeSuperphrygien1, modeSuperphrygien2, modeLydienDiese2, modeLydienDiese21, modeLydienDiese22, modeSuperlocrienDiminue, modeSuperlocrienDiminue1, modeSuperlocrienDiminue2,
        modePelog, modeHirajoshi, modeKumoi, modeBeBop, gammeParTon, gammeParTon1, gammeParTon2, gammeDiminueeDemiTonTon,
        gammeDiminueeTonDemiTon, gammeDiminueeTonDemiTon1, gammeDiminueeTonDemiTon2, gammeHarmoniqueDouble, pentaMineure, pentaMajeure} from '../data/Gammes.js';
import * as actions from '../actions';


class PositionsList extends Component {
  renderPositions() {
    const { note, accordType, gamme_chosed } = this.props;
    console.log(typeAccordToObjet(accordType));
    console.log(noteToObjet(note));
    console.log(this.props);
    return gamme_chosed.modes.map((mode, index) =>
      <CardSection key={index}>
        <TouchableOpacity onPress={() => this.props.positionClicked(mode, note)}>
          <Text>
            {` ${mode.nomGamme}   •   ${mode.positionGamme}`} <Text style={{ color: '#007aff' }} >→</Text>
          </Text>
        </TouchableOpacity>
      </CardSection>
    );
  }

  render() {
      return (
        <View>
          {this.renderPositions()}
        </View>
      );
  }
}


const typeAccordToObjet = (typeAccord) => {
  switch (typeAccord) {

    case 'accordMajeur':
      return accordMajeur;

    case 'accordM7':
      return accordM7;

    case 'accordMineur':
      return accordMineur;

    case 'accordMoins7':
      return accordMoins7;

    case 'accord7':
      return accord7;

    case 'accord7alt':
      return accord7alt;

    case 'accordMoins7b5':
      return accordMoins7b5;

    case 'accord7barre':
      return accord7barre;

    case 'accord7sus4':
      return accord7sus4;

    case 'accordMoinsM7':
      return accordMoinsM7;

    case 'accordM7Diese11':
      return accordM7Diese11;

    case 'accordPlusM7':
      return accordPlusM7;

    default:
      return accordMajeur;
  }
};

export const noteToObjet = (note) => {
  switch (note) {

    case 'Fa':
      return fa;
    case 'Fa#':
      return faDiese;
    case 'Sol':
      return sol;
    case 'Sol#':
      return solDiese;
    case 'La':
      return la;
    case 'Sib':
      return siBemol;
    case 'Si':
      return si;
    case 'Do':
      return doo;
    case 'Do#':
      return doDiese;
    case 'Re':
      return re;
    case 'Mib':
      return miBemol;
    case 'Mi':
      return mi;

    default:
      return doo;

  }
};

export const gammeToObjet = (nom_gamme) => {
  switch (nom_gamme) {

    case 'modeIonien':
      return modeIonien;
    case 'modeLydien':
      return modeLydien;
    case 'modePhrygien':
      return modePhrygien
    default:
      return modeDorien;

  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    gamme: gammeToObjet(state.gamme),
    noteparent: noteToObjet(state.accords.note)
  };
};

export default connect(mapStateToProps, actions)(PositionsList);
