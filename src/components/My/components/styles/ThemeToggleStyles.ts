import { StyleSheet } from 'react-native';
import { Theme } from '../../../../context/ThemeContext';

export const createThemeToggleStyles = (theme: Theme) => StyleSheet.create({
  themeSection: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  themeCard: {
    backgroundColor: theme.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.border,
    padding: 20,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  themeToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  themeTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 2,
  },
  themeSubtitle: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  themeSwitch: {
    width: 52,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.border,
    padding: 2,
    justifyContent: 'center',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  themeSwitchActive: {
    backgroundColor: theme.primary,
  },
  themeSwitchThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.surface,
    transform: [{ translateX: 0 }],
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  themeSwitchThumbActive: {
    transform: [{ translateX: 20 }],
  },
});