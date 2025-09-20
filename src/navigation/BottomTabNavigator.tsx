import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

// 导入页面组件
import HomeScreen from '../screens/HomeScreen';
import BookShelfScreen from '../screens/BookShelfScreen';
import SearchScreen from '../screens/SearchScreen';
import MyScreen from '../components/My';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource: any;

          switch (route.name) {
            case '首页':
              iconSource = focused
                ? require('../assets/icons/home.png')  // 高亮时图标
                : require('../assets/icons/home-outline.png'); // 非高亮时图标
              break;
            case '书架':
              iconSource = focused
                ? require('../assets/icons/library.png')
                : require('../assets/icons/library-outline.png');
              break;
            case '搜索':
              iconSource = focused
                ? require('../assets/icons/search.png')
                : require('../assets/icons/search-outline.png');
              break;
            case '我的':
              iconSource = focused
                ? require('../assets/icons/user.png')
                : require('../assets/icons/user-outline.png');
              break;
            default:
              iconSource = require('../assets/icons/help.png'); // 默认图标
          }

          return (
            <Image
              source={iconSource}  // 使用require()获取的图像对象
              style={{ width: size, height: size, tintColor: color }}  // 设置图标大小和颜色
            />
          );
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="首页" component={HomeScreen} />
      <Tab.Screen name="书架" component={BookShelfScreen} />
      <Tab.Screen name="搜索" component={SearchScreen} />
      <Tab.Screen name="我的" component={MyScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
