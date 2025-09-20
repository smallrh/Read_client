import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../context/ThemeContext';
import { createStyles } from './styles';
import { mockCheckinData, CheckinData } from './mockData';
import { CommonHeader } from '../shared';
import { 
  CheckinStatusCard, 
  WeeklyCalendar, 
  AchievementsList, 
  TipsCard 
} from './components';

const DailyCheckin: React.FC = () => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const [checkinData, setCheckinData] = useState<CheckinData>(mockCheckinData);

  const handleCheckin = () => {
    if (!checkinData.isCheckedToday) {
      setCheckinData(prev => ({
        ...prev,
        isCheckedToday: true,
        checkedDays: prev.checkedDays + 1,
        monthlyStats: {
          ...prev.monthlyStats,
          consecutiveDays: prev.monthlyStats.consecutiveDays + 1,
          totalDays: prev.monthlyStats.totalDays + 1,
          totalRewards: prev.monthlyStats.totalRewards + 10
        },
        weeklyRewards: prev.weeklyRewards.map(reward => 
          reward.isToday ? { ...reward, claimed: true } : reward
        )
      }));
    }
  };

  return (
    <View style={styles.container}>
      <CommonHeader 
        title="每日签到"
        rightAction={{
          icon: "calendar-today",
          onPress: () => console.log('Calendar pressed')
        }}
      />

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Checkin Status */}
        <CheckinStatusCard
          monthlyStats={checkinData.monthlyStats}
          isCheckedToday={checkinData.isCheckedToday}
          onCheckin={handleCheckin}
        />

        {/* Weekly Calendar */}
        <WeeklyCalendar
          weeklyRewards={checkinData.weeklyRewards}
          checkedDays={checkinData.checkedDays}
        />

        {/* Achievements */}
        <AchievementsList achievements={checkinData.achievements} />

        {/* Tips */}
        <TipsCard />
      </ScrollView>
    </View>
  );
};

export default DailyCheckin;