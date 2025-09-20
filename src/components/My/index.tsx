import React from 'react';
import { 
  View, 
  ScrollView, 
  StatusBar
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../../context/ThemeContext';
import { createStyles } from './styles';
import {
  ProfileHeader,
  MenuItems,
  ThemeToggle,
  VIPPromotion,
  VersionInfo,
  StatItem
} from './components';

interface ProfileProps {
  onMenuItemClick?: (item: string) => void;
}

const MyScreen: React.FC<ProfileProps> = ({ 
  onMenuItemClick 
}) => {
  const { theme, isDarkMode } = useTheme();
  const styles = createStyles(theme);

  const userStats: StatItem[] = [
    { 
      label: '阅读时长', 
      value: '156h', 
      icon: 'access-time', 
      color: 'rgba(59, 130, 246, 0.1)' 
    },
    { 
      label: '收藏书籍', 
      value: '23', 
      icon: 'favorite', 
      color: 'rgba(236, 72, 153, 0.1)' 
    },
    { 
      label: '下载数量', 
      value: '12', 
      icon: 'file-download', 
      color: 'rgba(16, 185, 129, 0.1)' 
    }
  ];

  const handleVIPUpgrade = () => {
    console.log('VIP upgrade pressed');
    // Add VIP upgrade logic here
  };

  // 确保页面聚焦时StatusBar配置正确
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content", true);
      if (StatusBar.setBackgroundColor) {
        StatusBar.setBackgroundColor(theme.background, true);
      }
    }, [isDarkMode, theme.background])
  );

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.background} 
        translucent={false}
        animated={true}
      />
      
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        overScrollMode="never"
      >
        {/* Profile Header with Avatar, Edit Button and Stats */}
        <ProfileHeader
          username="阅读爱好者"
          isVip={true}
          levelText="VIP会员"
          stats={userStats}
        />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Menu Items */}
        <MenuItems onMenuItemClick={onMenuItemClick} />

        {/* VIP Promotion */}
        <VIPPromotion onUpgradePress={handleVIPUpgrade} />

        {/* Version Info */}
        <VersionInfo />
      </ScrollView>
    </View>
  );
};

export default MyScreen;