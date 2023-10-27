import React from 'react';
import {Button} from 'react-native';
import {CreateProps} from '../types';
import {colors} from '../../../utils/styleSheet';

function Create({title, onPress}: CreateProps) {
  return (
    <Button
      testID="create-button"
      title={title}
      onPress={onPress}
      color={colors.midnightGreen}
    />
  );
}

export default Create;
