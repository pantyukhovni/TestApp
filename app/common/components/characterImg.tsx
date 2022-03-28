import React from 'react';
import {Image} from 'native-base';

interface OwnProps {
  img: string;
}

const CharacterImg = ({img}: OwnProps) => {
  return (
    <Image
      width={150}
      height="100%"
      borderLeftRadius={10}
      source={{
        uri: img,
      }}
      alt="alt"
    />
  );
};

export default CharacterImg;
