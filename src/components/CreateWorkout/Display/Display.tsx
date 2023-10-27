import React from 'react';
import {View, Text, Button} from 'react-native';
import {DisplayProps} from '../types';
import {styles, colors} from '../../../utils/styleSheet';

function Display({exercises, addButtonText, handleAdd}: DisplayProps) {
  return (
    <View style={styles.stage} testID="display-container">
      {exercises.map(({name}) => (
        <Text key={name} testID={`exercise-${name}`} children={name} />
      ))}
      <Button
        testID="add-button"
        title={addButtonText}
        onPress={handleAdd}
        color={colors.midnightGreen}
      />
    </View>
  );
}

export default Display;
