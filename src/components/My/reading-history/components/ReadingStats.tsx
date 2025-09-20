import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createReadingStatsStyles } from './styles/ReadingStatsStyles';

interface ReadingStatsProps {
  totalBooks: number;
  totalHours: number;
  totalWords: number;
  currentStreak: number;
}

export const ReadingStats: React.FC<ReadingStatsProps> = ({
  totalBooks,
  totalHours,
  totalWords,
  currentStreak
}) => {
  const { theme } = useTheme();
  const styles = createReadingStatsStyles(theme);

  const stats = [
    { 
      label: '阅读书籍', 
      value: `${totalBooks}`, 
      icon: 'menu-book', 
      color: 'rgba(59, 130, 246, 0.1)',
      unit: '本'
    },
    { 
      label: '阅读时长', 
      value: `${totalHours}`, 
      icon: 'access-time', 
      color: 'rgba(236, 72, 153, 0.1)',
      unit: '小时'
    },
    { 
      label: '阅读字数', 
      value: `${(totalWords / 10000).toFixed(1)}`, 
      icon: 'text-fields', 
      color: 'rgba(16, 185, 129, 0.1)',
      unit: '万字'
    },
    { 
      label: '连续天数', 
      value: `${currentStreak}`, 
      icon: 'local-fire-department', 
      color: 'rgba(245, 158, 11, 0.1)',
      unit: '天'
    }
  ];

  return (
    <View style={styles.statsCard}>
      <View style={styles.statsHeader}>
        <View style={styles.statsIconContainer}>
          <MaterialIcon name="bar-chart" size={20} color={theme.primary} />
        </View>
        <View style={styles.statsHeaderText}>
          <Text style={styles.statsTitle}>阅读统计</Text>
          <Text style={styles.statsSubtitle}>您的阅读成就一览</Text>
        </View>
      </View>
      
      <View style={styles.statsGrid}>
        {stats.map(({ label, value, icon, color, unit }) => (
          <View key={label} style={[styles.statCard, { backgroundColor: color }]}>
            <MaterialIcon name={icon} size={20} color="#3b82f6" style={styles.statIcon} />
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statUnit}>{unit}</Text>
            <Text style={styles.statLabel}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};