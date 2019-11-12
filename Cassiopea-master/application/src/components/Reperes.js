import React from 'react';
import { View, Text } from 'react-native';


const Reperes = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
        {renderReperesCases()}
    </View>
  );
};


const renderReperesCases = () => {
  const { textStyle, caseStyle } = styles;
  const numerosDeCases = [];
  let i = -1;
  const len = 22;
  while (++i <= len) numerosDeCases.push(i);
  return (numerosDeCases.map(numCase =>
          <View style={caseStyle} key={numCase}>
            <Text style={textStyle}>{assigneRepereACase(numCase)}</Text>
          </View>));
};

const assigneRepereACase = (i) => {
    if (i === 3 || i === 5 || i === 7 || i === 9 || i === 15
      || i === 17 || i === 19 || i === 21) return '•';
    else if (i === 0 || i === 12) return '••';
    return '';
};

const styles = {
  viewStyle: {
    width: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  caseStyle: {
    height: 70,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#888888'
  },
  textStyle: {
    fontSize: 50,
    alignSelf: 'center',
    color: '#222222'
  }
};

export default Reperes;
