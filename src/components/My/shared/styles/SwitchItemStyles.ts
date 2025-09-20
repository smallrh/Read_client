import { StyleSheet } from 'react-native';
import { Theme } from '../../../../context/ThemeContext';

export const createSwitchItemStyles = (theme: Theme) => StyleSheet.create({
  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  switchItemContent: {
    flex: 1,
    marginRight: 16,
  },
  switchItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  switchItemDescription: {
    fontSize: 12,
    color: theme.textSecondary,
  },
});