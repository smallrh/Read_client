import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createWeeklyCalendarStyles } from './styles/WeeklyCalendarStyles';

interface WeeklyReward {
  day: number;
  reward: string;
  icon: string;
  claimed: boolean;
  isToday: boolean;
  isSpecial: boolean;
}

interface WeeklyCalendarProps {
  weeklyRewards: WeeklyReward[];
  checkedDays: number;
}

export const WeeklyCalendar: React.FC<WeeklyCalendarProps> = ({
  weeklyRewards,
  checkedDays
}) => {
  const { theme } = useTheme();
  const styles = createWeeklyCalendarStyles(theme);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'menu-book':
        return 'menu-book';
      case 'stars':
        return 'stars';
      case 'card-giftcard':
        return 'card-giftcard';
      default:
        return 'menu-book';
    }
  };

  return (
    <View style={styles.weeklyCard}>
      <View style={styles.weeklyHeader}>
        <Text style={styles.weeklyTitle}>本周签到</Text>
        <Text style={styles.weeklyProgress}>{checkedDays}/7 天</Text>
      </View>

      <View style={styles.weeklyCalendar}>
        {weeklyRewards.map((item) => (
          <View
            key={item.day}
            style={[
              styles.calendarDay,
              item.claimed && styles.calendarDayClaimed,
              item.isToday && styles.calendarDayToday,
              item.isSpecial && styles.calendarDaySpecial
            ]}
          >
            {item.isSpecial && (
              <View style={styles.specialBadge}>
                <MaterialIcon name="star" size={10} color={theme.warning} />
              </View>
            )}
            
            <View style={[
              styles.calendarDayIcon,
              item.claimed && styles.calendarDayIconClaimed,
              item.isToday && styles.calendarDayIconToday
            ]}>
              <MaterialIcon 
                name={getIconComponent(item.icon)} 
                size={16} 
                color={
                  item.claimed 
                    ? theme.success 
                    : item.isToday 
                      ? theme.primary 
                      : theme.textMuted
                } 
              />
            </View>
            
            <Text style={styles.calendarDayNumber}>第{item.day}天</Text>
            <Text style={styles.calendarDayReward} numberOfLines={2}>{item.reward}</Text>
            
            {item.claimed && (
              <View style={styles.claimedDot} />
            )}
            
            {item.isToday && !item.claimed && (
              <View style={styles.todayPulse} />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};