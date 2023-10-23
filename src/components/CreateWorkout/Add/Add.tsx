import React from 'react';
import {View, Button} from 'react-native';
import {AddProps} from '../types';
import {styles} from '../../../utils/styleSheet';
import Title from '../Title/Title';

function Add({handleWeight, handleCardio, handleBack}: AddProps) {
  return (
    <View style={styles.stage} testID="add-container">
      <Title title="Add exercise" handleBack={handleBack} />
      <Button testID="cardio-button" title="cardio" onPress={handleCardio} />
      <Button testID="weight-button" title="weight" onPress={handleWeight} />
    </View>
  );
}

export default Add;
