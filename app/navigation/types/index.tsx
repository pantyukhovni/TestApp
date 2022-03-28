type RootStackParamList = CharacterParamList & {
  Favorites: undefined;
  Home: undefined;
};

type CharacterParamList = {
  CharacterList: undefined;
  Character: {id: string};
};

export type {RootStackParamList, CharacterParamList};
