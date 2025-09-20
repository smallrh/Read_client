import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Theme } from '../../context/ThemeContext';

const { width, height } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollContent: {
    paddingBottom: 80,
    flexGrow: 1,
  },

  // Header Section
  headerSection: {
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: theme.primaryLight,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  profileContainer: {
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    minHeight: 200, // 确保容器有最小高度
  },

  // Avatar Section
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
    position: 'relative',
  },
  avatarGlow: {
    position: 'absolute',
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: theme.primaryLight,
    top: -4,
    left: -4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: theme.surface,
  },
  vipBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.warning,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: theme.surface,
  },

  // Profile Info
  profileInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 8,
  },
  userLevel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  levelText: {
    fontSize: 14,
    color: theme.warning,
    fontWeight: '600',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 6,
  },
  editButtonText: {
    fontSize: 14,
    color: theme.primary,
    fontWeight: '500',
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    position: 'relative',
    overflow: 'hidden',
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.textSecondary,
    textAlign: 'center',
  },

  // Theme Section
  themeSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  themeCard: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 16,
  },
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  themeTextContainer: {
    flex: 1,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 2,
  },
  themeSubtitle: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  themeSwitch: {
    width: 48,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.textMuted,
    padding: 2,
    justifyContent: 'center',
  },
  themeSwitchActive: {
    backgroundColor: theme.primary,
  },
  themeSwitchThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.surface,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  themeSwitchThumbActive: {
    transform: [{ translateX: 20 }],
  },

  // Menu Section
  menuSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  menuCard: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  menuItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: theme.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  menuItemDescription: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  newBadge: {
    backgroundColor: theme.error,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 8,
  },
  newBadgeText: {
    fontSize: 10,
    color: theme.surface,
    fontWeight: '600',
  },

  // VIP Section
  vipSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  vipCard: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.2)',
    borderRadius: 16,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  vipContent: {
    position: 'relative',
  },
  vipHeader: {
    marginBottom: 12,
  },
  vipIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  vipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400e',
  },
  vipDescription: {
    fontSize: 14,
    color: '#b45309',
    lineHeight: 20,
    marginBottom: 16,
  },
  vipActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  vipButton: {
    backgroundColor: theme.warning,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: theme.warning,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  vipButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.surface,
  },
  vipPrice: {
    fontSize: 12,
    color: '#d97706',
    fontWeight: '500',
  },

  // Version Section
  versionSection: {
    paddingHorizontal: 16,
  },
  versionCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    color: theme.textSecondary,
  },
});