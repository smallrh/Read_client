import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createFontSizeSelectorStyles = (theme: Theme) => StyleSheet.create({
  fontSizeContainer: {
    marginTop: 8,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 16,
  },
  fontSizeGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  fontSizeButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: theme.surface,
  },
  fontSizeButtonActive: {
    borderColor: theme.primary,
    backgroundColor: theme.primaryLight,
  },
  fontSizePreview: {
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  fontSizePreviewActive: {
    color: theme.primary,
  },
  fontSizeName: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.textSecondary,
  },
  fontSizeNameActive: {
    color: theme.primary,
  },
});