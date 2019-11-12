import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { Card, CardSection, Button } from './common';
import { noteToObjet, gammeToObjet } from './GammesList';
import { renderPositions } from './PositionsList';
import PositionsList from './PositionsList';
import styles from './Accueil';

const { width } = Dimensions.get('window');

class PositionView extends Component {
  render() {
    const { noteparent, typeAccord} = this.props;

    console.log('coucou1', noteparent, typeAccord);
    const note = noteToObjet(noteparent);
    console.log('coucou2', note, typeAccord);

    //Ici on fera return renderMancheGuitare(gamme, note);
    /*return render_view(note, gamme);*/
    return (
      <View
              style={{
                      width,
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      //alignItems: 'center'
                     }}
        >
          <Text
                 style={{
                           paddingTop: 10,
                           fontSize: width / 12,
                           fontWeight: 'bold',
                           textAlign: 'center',
                           color: '#CCCCCC'
                         }}
          >
            ❸
          </Text>
          <Card>
            <CardSection style={styles.gammesListLabelContainerStyle}>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              //paddingLeft: 20,
              alignSelf: 'stretch',
              color: '#007aff'
            }}>
                {"Gammes existantes pour la note et l'accord selectionnés"}
              </Text>
            </CardSection>
            <ScrollView>
              <GammesList note={this.props.note} accordType={this.props.typeAccord}/>
            </ScrollView>
            <View style={{ justifyContent: 'center', flexDirection: 'row', paddingLeft: 3, paddingRight: 3 }}>
              <Text
                style={{
                        color: '#CCCCCC',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingTop: 5,
                        paddingBottom: 5
                      }}
              >
                Cliquez sur une gamme pour afficher ses positions
              </Text>
            </View>

          </Card>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    typeAccordparent: typeAccordToObjet(state.accords.typeAccord),
    noteparent: noteToObjet(state.accords.note)
  };
};

export default GammeView;
