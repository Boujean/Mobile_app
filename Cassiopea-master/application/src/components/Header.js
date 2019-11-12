//import
import React from 'react';
import { Text, View } from 'react-native';

//make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    top: -1,
    backgroundColor: '#DDDDDD',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 25,
    paddingTop: 0, //15 before
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // elevation: 20,
    // position: 'relative',
    borderTopWidth: 3,
    borderTopColor: '#DDDDDD',
    borderBottomColor: '#828287',
    borderBottomWidth: 0.5
  },
  textStyle: {
    top: -5,
    fontSize: 20,
    fontWeight: 'bold',
  }

};


//make component available to the other part
export default Header;
