import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import HomePage from '../components/Home';
import { Novel } from '../types/novel';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleNovelClick = (novel: Novel) => {
    navigation.navigate('BookDetail', { novel });
  };

  return <HomePage onNovelClick={handleNovelClick} />;
}