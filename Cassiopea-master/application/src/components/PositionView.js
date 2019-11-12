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
    const { noteparent, typeAccord, gamme } = this.props;

    console.log('coucou1', noteparent, gamme);
    const note = noteToObjet(noteparent);
    console.log('coucou2', note, gamme);

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
                {`Positions existantes pour le ${gamme.nomGamme}`}
              </Text>
            </CardSection>
            <ScrollView>
              <PositionsList note={this.props.note} accordType={this.props.typeAccord} gamme_chosed={this.props.gamme}/>
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
                Cliquez sur une position pour afficher et jouer ses notes
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
    gamme: gammeToObjet(state.gamme),
    noteparent: noteToObjet(state.accords.note)
  };
};

export default PositionView;
