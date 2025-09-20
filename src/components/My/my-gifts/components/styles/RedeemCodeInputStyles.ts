import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createRedeemCodeInputStyles = (theme: Theme) => StyleSheet.create({
  redeemCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 20,
    marginBottom: 24,
  },
  redeemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  redeemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  redeemCloseButton: {
    padding: 4,
  },
  redeemInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  redeemInput: {
    flex: 1,
    height: 44,
    backgroundColor: theme.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.text,
    borderWidth: 1,
    borderColor: theme.border,
  },
  redeemButton: {
    backgroundColor: theme.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  redeemButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.surface,
  },
});