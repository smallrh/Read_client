import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Theme } from '../../../context/ThemeContext';

const { width, height } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 50,
    backgroundColor: theme.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: theme.surface,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: theme.surface,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 80,
  },

  // Checkin Status Card
  checkinStatusCard: {
    position: 'relative',
    backgroundColor: theme.primaryLight,
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.primary,
  },
  backgroundDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: `${theme.primary}20`,
    transform: [{ translateX: 32 }, { translateY: -32 }],
  },
  checkinContent: {
    position: 'relative',
    zIndex: 1,
  },
  checkinHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkinIconContainer: {
    padding: 12,
    backgroundColor: theme.primary,
    borderRadius: 16,
    marginRight: 12,
  },
  checkinHeaderText: {
    flex: 1,
  },
  checkinTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  checkinSubtitle: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  checkinButton: {
    backgroundColor: theme.primary,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: theme.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  checkinButtonDisabled: {
    backgroundColor: theme.border,
    shadowOpacity: 0,
    elevation: 0,
  },
  checkinButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.surface,
  },
  checkinButtonTextDisabled: {
    color: theme.textMuted,
  },

  // Weekly Calendar
  weeklyCard: {
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
  weeklyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  weeklyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  weeklyProgress: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  weeklyCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  calendarDay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: theme.surface,
    position: 'relative',
    minHeight: 110,
  },
  calendarDayClaimed: {
    borderColor: theme.success,
    backgroundColor: `${theme.success}10`,
  },
  calendarDayToday: {
    borderColor: theme.primary,
    backgroundColor: theme.primaryLight,
    shadowColor: theme.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  calendarDaySpecial: {
    borderColor: theme.warning,
    backgroundColor: `${theme.warning}10`,
  },
  specialBadge: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 16,
    height: 16,
    backgroundColor: theme.warning,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDayIcon: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: theme.border,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
  },
  calendarDayIconClaimed: {
    backgroundColor: `${theme.success}20`,
  },
  calendarDayIconToday: {
    backgroundColor: theme.primaryLight,
  },
  calendarDayNumber: {
    fontSize: 11,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 6,
    textAlign: 'center',
  },
  calendarDayReward: {
    fontSize: 9,
    color: theme.textSecondary,
    textAlign: 'center',
    lineHeight: 12,
    paddingHorizontal: 1,
    numberOfLines: 2,
  },
  claimedDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.success,
  },
  todayPulse: {
    position: 'absolute',
    top: -2,
    left: '50%',
    marginLeft: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
  },

  // Achievements
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

  // Tips
  tipsCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipsIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
    marginTop: 8,
    marginRight: 12,
  },
  tipsContent: {
    flex: 1,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  tipsText: {
    fontSize: 12,
    color: theme.textSecondary,
    lineHeight: 18,
  },
});