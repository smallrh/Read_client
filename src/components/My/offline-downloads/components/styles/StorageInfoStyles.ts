import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createStorageInfoStyles = (theme: Theme) => StyleSheet.create({
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
  manageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: theme.primaryLight,
  },
  manageButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.primary,
  },
  storageProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storageProgressBar: {
    flex: 1,
    height: 8,
    backgroundColor: theme.border,
    borderRadius: 4,
    marginRight: 12,
  },
  storageProgressFill: {
    height: '100%',
    borderRadius: 4,
  },
  storagePercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    minWidth: 50,
    textAlign: 'right',
  },
});