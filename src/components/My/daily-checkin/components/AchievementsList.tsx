import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createAchievementsListStyles } from './styles/AchievementsListStyles';

interface Achievement {
  title: string;
  description: string;
  reward: string;
  progress: number;
  completed: boolean;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

export const AchievementsList: React.FC<AchievementsListProps> = ({
  achievements
}) => {
  const { theme } = useTheme();
  const styles = createAchievementsListStyles(theme);

  return (
    <View style={styles.achievementsCard}>
      <View style={styles.achievementsHeader}>
        <View style={styles.achievementsIconContainer}>
          <MaterialIcon name="emoji-events" size={20} color={theme.primary} />
        </View>
        <View style={styles.achievementsHeaderText}>
          <Text style={styles.achievementsTitle}>签到成就</Text>
          <Text style={styles.achievementsSubtitle}>完成挑战获得额外奖励</Text>
        </View>
      </View>

      <View style={styles.achievementsList}>
        {achievements.map((achievement, index) => (
          <View
            key={index}
            style={[
              styles.achievementItem,
              achievement.completed && styles.achievementItemCompleted
            ]}
          >
            <View style={styles.achievementContent}>
              <View style={styles.achievementInfo}>
                <View style={styles.achievementTitleContainer}>
                  <Text style={styles.achievementTitle}>{achievement.title}</Text>
                  {achievement.completed && (
                    <View style={styles.completedDot} />
                  )}
                </View>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
                <Text style={styles.achievementReward}>奖励: {achievement.reward}</Text>
              </View>
              <View style={styles.achievementStatus}>
                <Text style={[
                  styles.achievementStatusText,
                  achievement.completed && styles.achievementStatusCompleted
                ]}>
                  {achievement.completed ? '已完成' : `${achievement.progress}%`}
                </Text>
              </View>
            </View>
            
            {!achievement.completed && (
              <View style={styles.achievementProgressContainer}>
                <View style={styles.achievementProgressBar}>
                  <View 
                    style={[
                      styles.achievementProgressFill,
                      { width: `${achievement.progress}%` }
                    ]}
                  />
                </View>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};