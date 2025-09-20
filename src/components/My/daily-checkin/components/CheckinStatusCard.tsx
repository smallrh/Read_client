import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createCheckinStatusCardStyles } from './styles/CheckinStatusCardStyles';

interface MonthlyStats {
  consecutiveDays: number;
  totalDays: number;
  totalRewards: number;
}

interface CheckinStatusCardProps {
  monthlyStats: MonthlyStats;
  isCheckedToday: boolean;
  onCheckin: () => void;
}

export const CheckinStatusCard: React.FC<CheckinStatusCardProps> = ({
  monthlyStats,
  isCheckedToday,
  onCheckin
}) => {
  const { theme } = useTheme();
  const styles = createCheckinStatusCardStyles(theme);

  return (
    <View style={styles.checkinStatusCard}>
      <View style={styles.backgroundDecoration} />
      
      <View style={styles.checkinContent}>
        <View style={styles.checkinHeader}>
          <View style={styles.checkinIconContainer}>
            <MaterialIcon name="card-giftcard" size={24} color={theme.surface} />
          </View>
          <View style={styles.checkinHeaderText}>
            <Text style={styles.checkinTitle}>每日签到</Text>
            <Text style={styles.checkinSubtitle}>坚持签到，获得丰厚奖励</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{monthlyStats.consecutiveDays}</Text>
            <Text style={styles.statLabel}>连续天数</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{monthlyStats.totalDays}</Text>
            <Text style={styles.statLabel}>本月签到</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{monthlyStats.totalRewards}</Text>
            <Text style={styles.statLabel}>总奖励</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={[
            styles.checkinButton,
            isCheckedToday && styles.checkinButtonDisabled
          ]}
          onPress={onCheckin}
          disabled={isCheckedToday}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.checkinButtonText,
            isCheckedToday && styles.checkinButtonTextDisabled
          ]}>
            {isCheckedToday ? '今日已签到' : '立即签到'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};