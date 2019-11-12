import React from 'react';
import { View, Text } from 'react-native';

const renderCases = () => {
  const { textStyle, caseStyle } = styles;
  const numerosDeCases = [];
  let i = -1;
  const len = 22;
  while (++i <= len) numerosDeCases.push(i);

  return (numerosDeCases.map(numCase =>
          <View style={caseStyle} key={numCase}>
            <Text style={textStyle}>{numCase}</Text>
          </View>));
};

const ReperesNumerotes = () => {
  const { viewStyle } = styles;
  return (
    <View style={viewStyle}>
        {renderCases()}
    </View>
  );
};

const styles = {
  viewStyle: {
    width: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  caseStyle: {
    height: 70,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#888888'
  },
  textStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: '#555555'
  }
};

export default ReperesNumerotes;
