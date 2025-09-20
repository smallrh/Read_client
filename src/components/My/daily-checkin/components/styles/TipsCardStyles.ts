import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createTipsCardStyles = (theme: Theme) => StyleSheet.create({
  tipsCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipsIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
    marginTop: 8,
    marginRight: 12,
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
});