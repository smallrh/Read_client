import { StyleSheet } from 'react-native';
import { Theme } from '../../context/ThemeContext';

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  header: {
    backgroundColor: theme.primaryLight,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  headerContent: {
    padding: 24,
    paddingTop: 48,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  tabsContainer: {
    paddingHorizontal: 16,
    marginTop: -24,
    marginBottom: 24,
  },
  tabs: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  tabButtonActive: {
    backgroundColor: theme.primary,
    shadowColor: theme.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  tabContent: {
    alignItems: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.textSecondary,
  },
  tabLabelActive: {
    color: '#fff',
  },
  tabCount: {
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  tabCountInactive: {
    backgroundColor: theme.primaryLight,
  },
  tabCountActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabCountText: {
    fontSize: 12,
    color: theme.primary,
  },
  tabCountTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  novelList: {
    gap: 16,
    paddingBottom: 20,
  },
  novelItem: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 16,
  },
  novelContent: {
    flexDirection: 'row',
    gap: 16,
  },
  bookCoverContainer: {
    position: 'relative',
  },
  bookCover: {
    width: 80,
    height: 112,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  readingBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: theme.primary,
    borderRadius: 12,
    padding: 4,
  },
  novelInfo: {
    flex: 1,
    gap: 8,
  },
  novelTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  novelAuthor: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  progressContainer: {
    gap: 4,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  progressPercent: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: theme.border,
    borderRadius: 3,
  },
  progressFill: {
    height: 6,
    backgroundColor: theme.primary,
    borderRadius: 3,
  },
  novelMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaItems: {
    flexDirection: 'row',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  moreButton: {
    padding: 8,
    borderRadius: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 64,
  },
  emptyIconContainer: {
    width: 96,
    height: 96,
    backgroundColor: theme.surface,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  discoverButton: {
    backgroundColor: theme.primary,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  discoverButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
});