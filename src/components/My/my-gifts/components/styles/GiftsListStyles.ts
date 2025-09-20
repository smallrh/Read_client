import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createGiftsListStyles = (theme: Theme) => StyleSheet.create({
  giftsCard: {
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
  giftsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  giftsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  giftsCount: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  giftsList: {
    gap: 16,
  },
  giftItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.border,
  },
  giftIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: theme.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  giftContent: {
    flex: 1,
  },
  giftMainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  giftName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    flex: 1,
  },
  giftStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  giftStatusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  giftDescription: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  giftDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  giftValue: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.primary,
  },
  giftSource: {
    fontSize: 12,
    color: theme.textMuted,
  },
  giftFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  giftDate: {
    fontSize: 12,
    color: theme.textMuted,
  },
  giftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  useButton: {
    backgroundColor: theme.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  useButtonText: {
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
});