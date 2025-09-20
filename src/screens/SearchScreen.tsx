import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import SearchComponent from '../components/Search';
import { Novel } from '../types/novel';

type SearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, '搜索'>,
  StackNavigationProp<RootStackParamList>
>;

interface SearchScreenProps {
  navigation: SearchScreenNavigationProp;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const handleNovelClick = (novel: Novel) => {
    navigation.navigate('BookDetail', { novel });
  };

  return <SearchComponent onNovelClick={handleNovelClick} />;
};

export default SearchScreen;