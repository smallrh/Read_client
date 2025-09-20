import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../../context/ThemeContext';

const { width } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },

  // Header Background
  headerBackground: {
    height: 192,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.primaryLight,
    opacity: 0.8,
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -16,
    right: -32,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: `${theme.primary}15`,
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -12,
    left: -24,
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: `${theme.primary}10`,
  },

  // Header Controls
  headerControls: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: `${theme.surface}80`,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  // Profile Section
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: -48,
    zIndex: 5,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarGlow: {
    position: 'absolute',
    top: -12,
    left: -12,
    right: -12,
    bottom: -12,
    backgroundColor: theme.primaryLight,
    borderRadius: 60,
    opacity: 0.6,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.surface,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 12,
  },
  cameraButton: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: theme.surface,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  // User Info
  userInfo: {
    alignItems: 'center',
    width: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginRight: 8,
  },
  vipBadge: {
    backgroundColor: '#F59E0B',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  vipText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  userId: {
    fontSize: 14,
    color: theme.textMuted,
    marginBottom: 8,
  },
  userBio: {
    fontSize: 14,
    color: theme.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
    marginLeft: 8,
  },

  // Achievements Grid
  achievementsGrid: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
  },
  achievementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  achievementCard: {
    width: (width - 44) / 2,
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
    overflow: 'hidden',
  },
  achievementGlow: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 64,
    height: 64,
    borderRadius: 32,
    transform: [{ translateX: 16 }, { translateY: -16 }],
  },
  achievementContent: {
    position: 'relative',
    zIndex: 1,
  },
  achievementIcon: {
    marginBottom: 8,
  },
  achievementInfo: {
    alignItems: 'flex-start',
  },
  achievementValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  achievementLabel: {
    fontSize: 12,
    color: theme.textSecondary,
    fontWeight: '500',
  },

  // Stats Card
  statsCard: {
    backgroundColor: theme.card,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginLeft: 8,
  },
  statsGrid: {
    // Container for stats rows
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    width: (width - 72) / 2,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 2,
  },
  statDescription: {
    fontSize: 12,
    color: theme.textMuted,
    textAlign: 'center',
  },

  // Activity Card
  activityCard: {
    backgroundColor: theme.card,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  activityList: {
    // Activity list styles
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
    marginTop: 8,
    marginRight: 12,
    flexShrink: 0,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    lineHeight: 20,
  },
  activityAction: {
    color: theme.textSecondary,
  },
  activityBook: {
    color: theme.text,
    fontWeight: '500',
  },
  activityChapter: {
    color: theme.primary,
  },
  activityTime: {
    fontSize: 12,
    color: theme.textMuted,
    marginTop: 4,
  },

  // Action Buttons
  actionButtons: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  actionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  actionButtonIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  actionButtonText: {
    flex: 1,
  },
  actionButtonTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  actionButtonDescription: {
    fontSize: 12,
    color: theme.textSecondary,
  },
});