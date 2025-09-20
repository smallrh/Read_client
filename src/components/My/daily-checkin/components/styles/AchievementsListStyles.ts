import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createAchievementsListStyles = (theme: Theme) => StyleSheet.create({
  achievementsCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 20,
    marginBottom: 24,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  achievementsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  achievementsIconContainer: {
    padding: 8,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    marginRight: 12,
  },
  achievementsHeaderText: {
    flex: 1,
  },
  achievementsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 2,
  },
  achievementsSubtitle: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  achievementsList: {
    gap: 16,
  },
  achievementItem: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: theme.surface,
  },
  achievementItemCompleted: {
    borderColor: theme.success,
    backgroundColor: `${theme.success}10`,
  },
  achievementContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  achievementInfo: {
    flex: 1,
    marginRight: 12,
  },
  achievementTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginRight: 8,
  },
  completedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.success,
  },
  achievementDescription: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  achievementReward: {
    fontSize: 12,
    color: theme.primary,
    fontWeight: '500',
  },
  achievementStatus: {
    alignItems: 'flex-end',
  },
  achievementStatusText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
  },
  achievementStatusCompleted: {
    color: theme.success,
  },
  achievementProgressContainer: {
    marginTop: 8,
  },
  achievementProgressBar: {
    width: '100%',
    height: 6,
    backgroundColor: theme.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  achievementProgressFill: {
    height: '100%',
    backgroundColor: theme.primary,
    borderRadius: 3,
  },
});