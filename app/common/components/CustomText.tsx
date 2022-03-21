import React from 'react';
import {Text} from 'react-native';
import {Box} from 'native-base';
import { useDispatch } from '../../redux/store';
import { fetchCharacters } from '../../redux/slices/characters';

const CustomText = ({text}: {text: string}) => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCharacters({}));
  }, []);
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>{text}</Text>
    </Box>
  );
};

export default CustomText;
