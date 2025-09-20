import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createThemeSelectorStyles = (theme: Theme) => StyleSheet.create({
  themesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  themeButton: {
    width: '48%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: theme.surface,
    position: 'relative',
  },
  themeButtonActive: {
    borderColor: theme.primary,
    backgroundColor: theme.primaryLight,
  },
  themePreview: {
    width: 60,
    height: 40,
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
    justifyContent: 'center',
  },
  themePreviewContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  themeLine: {
    height: 2,
    borderRadius: 1,
    marginBottom: 2,
  },
  themeLineShort: {
    width: '80%',
  },
  themeLineVeryShort: {
    width: '60%',
  },
  themeName: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.text,
    textAlign: 'center',
  },
  themeActiveIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
  },
});