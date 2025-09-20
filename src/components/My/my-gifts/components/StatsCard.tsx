import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createStatsCardStyles } from './styles/StatsCardStyles';

interface StatsCardProps {
  totalGifts: number;
  unusedGifts: number;
  usedGifts: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  totalGifts,
  unusedGifts,
  usedGifts
}) => {
  const { theme } = useTheme();
  const styles = createStatsCardStyles(theme);

  return (
    <View style={styles.statsCard}>
      <View style={styles.statsHeader}>
        <View style={styles.statsIconContainer}>
          <MaterialIcon name="card-giftcard" size={20} color={theme.primary} />
        </View>
        <View style={styles.statsHeaderText}>
          <Text style={styles.statsTitle}>礼品统计</Text>
          <Text style={styles.statsSubtitle}>查看您的礼品收藏</Text>
        </View>
      </View>
      
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{totalGifts}</Text>
          <Text style={styles.statLabel}>总礼品</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{unusedGifts}</Text>
          <Text style={styles.statLabel}>未使用</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{usedGifts}</Text>
          <Text style={styles.statLabel}>已使用</Text>
        </View>
      </View>
    </View>
  );
};