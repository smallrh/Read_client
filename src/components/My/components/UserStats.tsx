import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { createUserStatsStyles } from './styles/UserStatsStyles';

export interface StatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
}

interface UserStatsProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
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

export const UserStats: React.FC<UserStatsProps> = ({
  stats = defaultStats
}) => {
  const { theme } = useTheme();
  const styles = createUserStatsStyles(theme);

  return (
    <View style={styles.statsGrid}>
      {stats.map(({ label, value, icon, color }) => (
        <View key={label} style={[styles.statCard, { backgroundColor: color }]}>
          <MaterialIcon name={icon} size={20} color="#3b82f6" style={styles.statIcon} />
          <Text style={styles.statValue}>{value}</Text>
          <Text style={styles.statLabel}>{label}</Text>
        </View>
      ))}
    </View>
  );
};