import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createReadingModeSelectorStyles = (theme: Theme) => StyleSheet.create({
  readingModeContainer: {
    marginTop: 8,
  },
  readingModeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: theme.surface,
    marginBottom: 12,
  },
  readingModeItemActive: {
    borderColor: theme.primary,
    backgroundColor: theme.primaryLight,
  },
  readingModeContent: {
    flex: 1,
  },
  readingModeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  readingModeDescription: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonActive: {
    borderColor: theme.primary,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.primary,
  },
});