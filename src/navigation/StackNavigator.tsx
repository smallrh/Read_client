import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useTheme } from '../context/ThemeContext';
import { Novel } from '../types/novel';

// Import screens
import BottomTabNavigator from './BottomTabNavigator';
import BookDetailScreen from '../components/BookDetail';
import ChapterListScreen from '../components/BookDetail/chapter';

// My component screens
import ReadingSettings from '../components/My/setting';
import NotificationScreen from '../components/My/notification';
import ReadingHistory from '../components/My/reading-history';
import OfflineDownloads from '../components/My/offline-downloads';
import DailyCheckin from '../components/My/daily-checkin';
import MyGifts from '../components/My/my-gifts';
import EditProfile from '../components/My/edit';
import ProfileDetail from '../components/My/profile-detail';
import ChangePassword from '../components/My/profile-detail/change-password';
import MyHonors from '../components/My/profile-detail/my-honors';
import PointStore from '../components/My/profile-detail/point-store';
import MyReviews from '../components/My/profile-detail/my-reviews';

export type RootStackParamList = {
  MainTabs: undefined;
  BookDetail: { novel: Novel };
  ChapterList: { novelId: string; novelTitle: string; totalChapters: number };
  // My component screens
  ReadingSettings: undefined;
  Notifications: undefined;
  ReadingHistory: undefined;
  OfflineDownloads: undefined;
  DailyCheckin: undefined;
  MyGifts: undefined;
  EditProfile: undefined;
  ProfileDetail: undefined;
  ChangePassword: undefined;
  MyHonors: undefined;
  PointStore: undefined;
  MyReviews: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // ❌ 不用内置 header
        cardStyle: { backgroundColor: theme.background },
        // 添加统一的页面过渡动画
        ...TransitionPresets.SlideFromRightIOS,
        // 自定义动画配置以减少抖动
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 250,
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 200,
            },
          },
        },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <Stack.Screen 
        name="MainTabs" 
        component={BottomTabNavigator}
      />
      <Stack.Screen 
        name="BookDetail" 
        component={BookDetailScreen} // ✅ 在 BookDetailScreen 里自己写自定义 Header
      />
      <Stack.Screen 
        name="ChapterList" 
        component={ChapterListScreen}
      />
      {/* My component screens */}
      <Stack.Screen 
        name="ReadingSettings" 
        component={ReadingSettings}
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationScreen}
      />
      <Stack.Screen 
        name="ReadingHistory" 
        component={ReadingHistory}
      />
      <Stack.Screen 
        name="OfflineDownloads" 
        component={OfflineDownloads}
      />
      <Stack.Screen 
        name="DailyCheckin" 
        component={DailyCheckin}
      />
      <Stack.Screen 
        name="MyGifts" 
        component={MyGifts}
      />
      <Stack.Screen 
        name="EditProfile" 
        component={EditProfile}
      />
      <Stack.Screen 
        name="ProfileDetail" 
        component={ProfileDetail}
      />
      <Stack.Screen 
        name="ChangePassword" 
        component={ChangePassword}
      />
      <Stack.Screen 
        name="MyHonors" 
        component={MyHonors}
      />
      <Stack.Screen 
        name="PointStore" 
        component={PointStore}
      />
      <Stack.Screen 
        name="MyReviews" 
        component={MyReviews}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
