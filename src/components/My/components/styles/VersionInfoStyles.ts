import { StyleSheet } from 'react-native';
import { Theme } from '../../../../context/ThemeContext';

export const createVersionInfoStyles = (theme: Theme) => StyleSheet.create({
  versionSection: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  versionCard: {
    backgroundColor: theme.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 16,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    color: theme.textMuted,
    textAlign: 'center',
  },
});