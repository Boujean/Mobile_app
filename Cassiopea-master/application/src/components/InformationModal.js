import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';

const InformationModal = ({ children, visible, onAccept }) => {
  const { containerStyle, textStyle, cardSectionStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>OK</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0 , 0, 0.50)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export default InformationModal;
