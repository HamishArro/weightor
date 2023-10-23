import React from 'react';
import {View, Button} from 'react-native';
import {AddProps} from '../types';
import {styles, colors} from '../../../utils/styleSheet';
import Title from '../Title/Title';

function Add({handleWeight, handleCardio, handleBack}: AddProps) {
  return (
    <View style={styles.stage} testID="add-container">
      <Title title="Add exercise" handleBack={handleBack} />
      <Button
        testID="cardio-button"
        title="cardio"
        onPress={handleCardio}
        color={colors.midnightGreen}
      />
      <Button
        testID="weight-button"
        title="weight"
        onPress={handleWeight}
        color={colors.midnightGreen}
      />
    </View>
  );
}

export default Add;
