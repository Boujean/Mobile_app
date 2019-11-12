import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const NoteButton = (props) => {
  const { buttonStyle } = styles;
  return (
    <TouchableOpacity
    onPress={props.onPress}
    style={buttonStyle}
    >
        {props.children}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#EEEEEE',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    elevation: 20,
    // marginBottom: 8
  }
};

export default NoteButton;
