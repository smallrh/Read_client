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

  // Storage Section
  storageCard: {
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
  storageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  storageIconContainer: {
    padding: 8,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    marginRight: 12,
  },
  storageHeaderText: {
    flex: 1,
  },
  storageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 2,
  },
  storageSubtitle: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  storageInfo: {
    gap: 16,
  },
  storageStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storageStatsText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
  },
  progressContainer: {
    // Used in multiple places
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: theme.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: theme.primary,
    borderRadius: 3,
  },
  storageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storageDetailText: {
    fontSize: 12,
    color: theme.textMuted,
  },

  // Network Section
  networkCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  networkConnected: {
    backgroundColor: `${theme.success}15`,
    borderWidth: 1,
    borderColor: `${theme.success}30`,
  },
  networkDisconnected: {
    backgroundColor: `${theme.error}15`,
    borderWidth: 1,
    borderColor: `${theme.error}30`,
  },
  networkContent: {
    flex: 1,
  },
  networkTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
  },
  networkSubtitle: {
    fontSize: 12,
  },

  // Downloading Section
  downloadingCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  downloadingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  downloadingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  pauseAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  pauseAllText: {
    fontSize: 14,
    color: theme.error,
    fontWeight: '500',
  },
  downloadingList: {
    // No additional styles needed
  },

  // Downloaded Section
  downloadedCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  downloadedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  downloadedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  manageButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  manageText: {
    fontSize: 14,
    color: theme.primary,
    fontWeight: '500',
  },
  downloadedList: {
    // No additional styles needed
  },

  // Book Items (shared between downloading and downloaded)
  bookItem: {
    padding: 16,
    backgroundColor: theme.surface,
  },
  bookItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  bookContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },

  // Book Cover
  bookCoverContainer: {
    position: 'relative',
  },
  bookCover: {
    width: 64,
    height: 88,
    borderRadius: 12,
    backgroundColor: theme.border,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.background,
    borderWidth: 2,
    borderColor: theme.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedIndicator: {
    backgroundColor: theme.success,
    borderColor: theme.background,
  },

  // Book Info
  bookInfo: {
    flex: 1,
    gap: 4,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  bookChapters: {
    fontSize: 14,
    color: theme.textSecondary,
  },

  // Download Progress
  downloadProgress: {
    marginVertical: 8,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  progressText: {
    fontSize: 12,
    color: theme.textMuted,
  },
  speedText: {
    fontSize: 12,
    color: theme.textMuted,
  },

  // Book Meta
  bookMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookMetaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusText: {
    fontSize: 12,
    color: theme.textMuted,
  },
  metaText: {
    fontSize: 12,
    color: theme.textMuted,
  },
  bookActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  // Settings Section
  settingsCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 20,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
  settingsList: {
    gap: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingLabel: {
    fontSize: 14,
    color: theme.text,
  },
  settingValue: {
    fontSize: 14,
    color: theme.textMuted,
  },
  enabledValue: {
    color: theme.primary,
    fontWeight: '500',
  },

  // Empty State (from EmptyState component styles)
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginTop: 24,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    color: theme.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});