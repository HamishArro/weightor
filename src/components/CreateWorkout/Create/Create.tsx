import React from 'react';
import {Button} from 'react-native';
import {CreateProps} from '../CreateWorkout.d';

function Create({title, onPress}: CreateProps) {
  return <Button testID="create-button" title={title} onPress={onPress} />;
}

export default Create;
