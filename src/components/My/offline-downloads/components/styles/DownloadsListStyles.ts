import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createDownloadsListStyles = (theme: Theme) => StyleSheet.create({
  downloadsCard: {
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
  downloadsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  downloadsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginLeft: 8,
  },
  booksCount: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  bookItem: {
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
  bookStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  bookAuthor: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  bookDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bookSize: {
    fontSize: 12,
    color: theme.textMuted,
  },
  bookChapters: {
    fontSize: 12,
    color: theme.textMuted,
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
  bookActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  downloadDate: {
    fontSize: 12,
    color: theme.textMuted,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.border,
  },
  separator: {
    height: 1,
    backgroundColor: theme.border,
    marginLeft: 72,
  },
});