import React from 'react';
import {View, Text, Button} from 'react-native';
import {AddProps} from '../types';
import {styles} from '../../../utils/styleSheet';

function Add({handleWeight, handleCardio, handleBack}: AddProps) {
  return (
    <View style={styles.stage} testID="add-container">
      <Text children={'Add exercise'} style={styles.title} />
      <Button testID="back-button" title="back" onPress={handleBack} />
      <Button testID="cardio-button" title="cardio" onPress={handleCardio} />
      <Button testID="weight-button" title="weight" onPress={handleWeight} />
    </View>
  );
}

export default Add;
