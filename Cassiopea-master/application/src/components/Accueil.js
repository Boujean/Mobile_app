import React, { Component } from 'react';
import { Text, Picker, View, ScrollView, TouchableOpacity, Linking, Dimensions , Animated } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import InformationModal from './InformationModal';
import Infos from './Infos';
import GammesList from './GammesList';
import PositionsList from './PositionsList';
//import { noteChanged } from '../actions';
import * as actions from '../actions';
/*import { fa, faDiese, sol, solDiese, la, siBemol,
          si, doo, doDiese, re, miBemol, mi } from '../data/Notes.js';
*/

const { width } = Dimensions.get('window');

class Accueil extends Component {
  state = { showModal: false };

  onNoteChanged(note) {
    this.props.noteChanged(note);
  }

  onTypeAccordChanged(typeAccord) {
    this.props.typeAccordChanged(typeAccord);
  }

  onAccept() {
    this.setState({ showModal: false });
  }

  scrollX = new Animated.Value(0);


  render() {

    let position = Animated.divide(this.scrollX, width);
    let aScrollView = ScrollView;
    console.log(this.props);
    console.log(this.props.note);
    console.log(this.props.typeAccord);
    console.log(this.props.gamme);
    console.log(this.props.positionGamme)
    return (
      <View style={styles.globalStyle}>

        <ScrollView
        horizontal={true}
        pagingEnabled={true} // animates ScrollView to nearest multiple of it's own width
        showsHorizontalScrollIndicator={false}
        // the onScroll prop will pass a nativeEvent object to a function
        onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
          [{ nativeEvent: { contentOffset: { x: this.scrollX } } }] // ... is an object that maps any nativeEvent prop to a variable
        )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
        scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
        ref={(scrollView) => { aScrollView = scrollView; }}
        contentOffset={{ x: width }} // la scrollView est initialisée à la position pour la vue 1
        >
        <Infos />
        <View
            style={{
                    width,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
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
          ❶
          </Text>
          <Card style={styles.pickerStyle}>
            <CardSection style={styles.pickerLabelContainerStyle}>
              <Text style={styles.pickerLabelTextStyle}>
                {"Choix de l'accord sur lequel improviser"}
              </Text>
            </CardSection>

            <CardSection>
              <Picker
                selectedValue={this.props.note}
                onValueChange={this.onNoteChanged.bind(this)}
                style={styles.pickerStyle}
              >
                <Picker.Item label="Do" value="Do" />
                <Picker.Item label="Do#" value="Do#" />
                <Picker.Item label="Re" value="Re" />
                <Picker.Item label="Mi♭" value="Mib" />
                <Picker.Item label="Mi" value="Mi" />
                <Picker.Item label="Fa" value="Fa" />
                <Picker.Item label="Fa#" value="Fa#" />
                <Picker.Item label="Sol" value="Sol" />
                <Picker.Item label="Sol#" value="Sol#" />
                <Picker.Item label="La" value="La" />
                <Picker.Item label="Si♭" value="Sib" />
                <Picker.Item label="Si" value="Si" />
              </Picker>

              <Picker
                selectedValue={this.props.typeAccord}
                onValueChange={this.onTypeAccordChanged.bind(this)}
                itemStyle={{ color: 'black' }}
                style={styles.pickerStyle}
              >
                <Picker.Item label="Majeur" value="accordMajeur" />
                <Picker.Item label="M7" value="accordM7" />
                <Picker.Item label="mineur" value="accordMineur" />
                <Picker.Item label="-7" value="accordMoins7" />
                <Picker.Item label="7" value="accord7" />
                <Picker.Item label="7alt" value="accord7alt" />
                <Picker.Item label="-7b5" value="accordMoins7b5" />
                <Picker.Item label="7̶" value="accord7barre" />
                <Picker.Item label="7sus4" value="accord7sus4" />
                <Picker.Item label="-M7" value="accordMoinsM7" />
                <Picker.Item label="M7#11" value="accordM7diese11" />
                <Picker.Item label="+M7" value="accordPlusM7" />
              </Picker>
            </CardSection>
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
                Sélectionnez un accord et appuyez sur ➲
              </Text>
            </View>
            </Card>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 20 }}>
              <TouchableOpacity
                onPress={() => { aScrollView.scrollTo({ x: 0 }); }}
                style={styles.smallButtonStyle}
              >
                <Text
                  style={styles.smallButtonTextStyle}// style={{ }}
                >
                i
                </Text>
              </TouchableOpacity>
              <View style={{ marginBottom: 5 }}></View>
              <TouchableOpacity
                onPress={() => { aScrollView.scrollTo({x: width*2}); }}
                style={styles.buttonStyle}
              >
                <Text
                  style={styles.buttonTextStyle}// style={{ }}
                >
                →
                </Text>
              </TouchableOpacity>
            </View>

          </View>

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
              ❷
            </Text>
            <Card>
              <CardSection style={styles.gammesListLabelContainerStyle}>
                <Text style={styles.gammesListLabelTextStyle}>
                  {`Gammes jouables pour l'accord sélectionné ${this.props.typeAccord}`}
                </Text>

              </CardSection>
              <ScrollView>
                <GammesList note={this.props.note} accordType={this.props.typeAccord} />
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
            <View style={{ marginBottom: 5 }}>
              <TouchableOpacity
                onPress={() => { aScrollView.scrollTo({ x: width }); }}
                style={styles.buttonStyle}
              >
                <Text
                  style={styles.buttonTextStyle}// style={{ }}
                >
                ←
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export const styles = {

  contentStyle: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
  },

  globalStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  /**** GAMMESLIST STYLES ****/
  gammesListStyle: {
    justifyContent: 'flex-start',
  },
  gammesListLabelTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    //paddingLeft: 20,
    alignSelf: 'stretch',
    color: '#007aff'
  },
  gammesListLabelContainerStyle: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },


  /**** PICKER STYLES ****/
  pickerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  //position: 'absolute',
  //bottom: 0,
    flex: 1
  },
  pickerLabelTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    //paddingLeft: 20,
    alignSelf: 'center',
    color: '#007aff'
  },
  pickerLabelContainerStyle: {
    backgroundColor: '#F7F7F7',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  buttonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 40,
    fontWeight: '600',
    paddingTop: 7,
    paddingBottom: 7
  },
  buttonStyle: {
    //flex: 0.15,
    //alignSelf: 'stretch',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: width / 5,
    height: width / 5,
    borderRadius: width / 10,
    borderWidth: 3,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },

  smallButtonTextStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: '600',
    // paddingTop: 7,
    // paddingBottom: 7
  },

  smallButtonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: width / 10,
    height: width / 10,
    borderRadius: width / 20,
    borderWidth: 1.5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }

};


const mapStateToProps = state => {
  console.log(state);
  return {
    note: state.accords.note,
    typeAccord: state.accords.typeAccord,
    gamme: state.gamme
  };
};

export default connect(mapStateToProps, actions)(Accueil);
