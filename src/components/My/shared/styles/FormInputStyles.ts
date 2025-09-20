import { StyleSheet } from 'react-native';
import { Theme } from '../../../../context/ThemeContext';

export const createFormInputStyles = (theme: Theme) => StyleSheet.create({
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: theme.text,
    minHeight: 48,
  },
  textArea: {
    minHeight: 120,
    paddingTop: 16,
  },
});