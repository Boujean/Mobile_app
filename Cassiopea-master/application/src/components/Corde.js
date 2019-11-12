import React from 'react';
import { View, Image, Text } from 'react-native';
import { loadAndPlayNote } from '../soundfunctions/SoundFunctions.js';
import NoteButton from './NoteButton';


const texture = require('../../textures/caseWithFret.png');
const texture0 = require('../../textures/caseWithFret0.png');
const texture1 = require('../../textures/caseWithFret1.png');


const Corde = (props) => {
  const { numCorde, notesAAfficherSurCorde, tsurcorde } = props;
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
        {renderCases(numCorde, notesAAfficherSurCorde, tsurcorde)}
    </View>
  );
};

/*
TODO: afficher un "T" et une case un peu différente pour les notes toniques.
pour ça on va créer pour chaque note, pour chaque corde un tableau qui contient
la position de la note, et en plus de faire "estDans" juste pour les Gammes
on le fera pour les toniques
*/

const renderCases = (numCorde, notesAAfficherSurCorde, tsurcorde) => {
  const { caseStyle, container } = styles;
  const numerosDeCases = [];
  let i = -1;
  const len = 22;
  while (++i <= len) numerosDeCases.push(i);

  return (numerosDeCases.map(numCase => {
          if (numCase === 0) {
            return (<Image source={texture0} style={container} key={numCase}>
              <View style={caseStyle}>
                {genereBoutonOuPas(numCase, numCorde, notesAAfficherSurCorde, tsurcorde)}
              </View>
            </Image>
          );
          }

          if (numCase === 1) {
            return (<Image source={texture1} style={container} key={numCase}>
              <View style={caseStyle}>
                {genereBoutonOuPas(numCase, numCorde, notesAAfficherSurCorde, tsurcorde)}
              </View>
            </Image>
          );
          }

          return (<Image source={texture} style={container} key={numCase}>
            <View style={caseStyle}>
              {genereBoutonOuPas(numCase, numCorde, notesAAfficherSurCorde, tsurcorde)}
            </View>
          </Image>);
        }
      ));
};


const genereBoutonOuPas = (numCase, numCorde, notesAAfficherSurCorde, tsurcorde) => {
  const { textStyle, content } = styles;
  if (estDans(numCase, notesAAfficherSurCorde)) {
    if (estDans(numCase, tsurcorde)) {
      return (
        <NoteButton
        onPress={() => {
          console.log(`NoteButton: corde ${numCorde}, case ${numCase}`);
          loadAndPlayNote(numCorde, numCase);
                        }
                }
        >
          <View style={content}>
            <Text style={textStyle}>T</Text>
          </View>
        </NoteButton>
      );
    }
    return (
      <NoteButton
      onPress={() => {
        console.log(`NoteButton: corde ${numCorde}, case ${numCase}`);
        loadAndPlayNote(numCorde, numCase);
                      }
              }
      />
    );
  }
  return;
};

const estDans = (numCase, tableauDeCases) => {
  const len = tableauDeCases.length;
  for (let i = 0; i < len; i++) {
    if (tableauDeCases[i] === numCase) {
      return true;
    }
  }
  return false;
};

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',

  },
  caseStyle: {
    height: 70,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  textStyle: {
    fontSize: 25,
    fontFamily: 'Cochin',
    alignSelf: 'center',
    color: '#555555',
    flex: 0.5,
    marginTop: 5,
    marginBottom: 3
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export default Corde;
