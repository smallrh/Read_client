import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackNavigator';

export type BookDetailRouteProp = RouteProp<RootStackParamList, 'BookDetail'>;
export type BookDetailNavigationProp = StackNavigationProp<RootStackParamList, 'BookDetail'>;

export interface BookDetailProps {
  route: BookDetailRouteProp;
  navigation: BookDetailNavigationProp;
}

export type ChapterListRouteProp = RouteProp<RootStackParamList, 'ChapterList'>;
export type ChapterListNavigationProp = StackNavigationProp<RootStackParamList, 'ChapterList'>;

export interface ChapterListProps {
  route: ChapterListRouteProp;
  navigation: ChapterListNavigationProp;
}

export interface Novel {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  views: number;
  status: 'ongoing' | 'finished';
  category: string;
  chapters: number;
  tags: string[];
  description: string;
}

export interface Chapter {
  id: string;
  novelId: string;
  title: string;
  content: string;
  isFree: boolean;
  createdAt: Date;
  chapterNumber?: number;
  publishDate?: string;
  wordCount?: number;
}
export interface ReadingProgress {
  novelId: string;
  chapterId: string;
  chapterNumber: number;
  position: number;
  lastRead: string;
}