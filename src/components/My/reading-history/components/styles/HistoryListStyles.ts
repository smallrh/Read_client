import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createHistoryListStyles = (theme: Theme) => StyleSheet.create({
  historyCard: {
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
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  historyTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginLeft: 8,
  },
  historyCount: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  historyItem: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  bookCover: {
    width: 60,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  bookContent: {
    flex: 1,
  },
  bookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    flex: 1,
    marginRight: 8,
  },
  bookCategory: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 10,
    color: theme.primary,
    fontWeight: '500',
  },
  bookAuthor: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  lastChapter: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: theme.border,
    borderRadius: 3,
    marginRight: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.primary,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: theme.textMuted,
    minWidth: 35,
    textAlign: 'right',
  },
  bookFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeInfo: {
    flex: 1,
  },
  lastReadTime: {
    fontSize: 12,
    color: theme.textMuted,
    marginBottom: 2,
  },
  readingTime: {
    fontSize: 12,
    color: theme.textMuted,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  continueButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.surface,
  },
  deleteButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.error,
  },
  separator: {
    height: 1,
    backgroundColor: theme.border,
    marginLeft: 72,
  },
});