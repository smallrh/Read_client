import React from 'react';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import Library from '../components/BookShelf';
import { novels } from '../data/novels';

type BookShelfScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<any, '书架'>,
  StackNavigationProp<RootStackParamList>
>;

interface BookShelfScreenProps {
  navigation: BookShelfScreenNavigationProp;
}

const BookShelfScreen: React.FC<BookShelfScreenProps> = ({ navigation }) => {
  const handleNovelClick = (novelItem: any) => {
    // 从 novels 数据中找到完整的小说信息
    const novel = novels.find(n => n.id === novelItem.id.toString());
    
    if (novel) {
      navigation.navigate('BookDetail', { novel });
    }
  };

  return <Library onNovelClick={handleNovelClick} />;
};

export default BookShelfScreen;