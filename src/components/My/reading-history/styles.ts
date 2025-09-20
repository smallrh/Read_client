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

  // Stats Section
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 16,
    alignItems: 'center',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statIconContainer: {
    padding: 8,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    marginBottom: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.textSecondary,
    textAlign: 'center',
  },

  // Search Section
  searchContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    paddingLeft: 48,
    paddingRight: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: theme.text,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  // History Section
  historyCard: {
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
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  clearButtonText: {
    fontSize: 14,
    color: theme.error,
    fontWeight: '500',
  },
  historyList: {
    // No additional styles needed
  },
  historyItem: {
    padding: 16,
    backgroundColor: theme.surface,
  },
  historyItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  historyItemContent: {
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
  progressIndicator: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.primary,
    borderWidth: 2,
    borderColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: theme.surface,
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
  bookAuthor: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  lastChapter: {
    fontSize: 14,
    color: theme.textMuted,
  },
  progressBarContainer: {
    marginVertical: 8,
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
  bookMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookMetaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  metaText: {
    fontSize: 12,
    color: theme.textMuted,
  },

  // Quick Actions
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    backgroundColor: theme.surface,
  },
  primaryButton: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
  },
  primaryButtonText: {
    color: theme.surface,
  },

  // Tips Section
  tipsCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  tipsIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
    marginTop: 8,
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

  // Empty State (从之前的样式移植过来)
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