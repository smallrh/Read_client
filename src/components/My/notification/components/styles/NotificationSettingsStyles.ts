import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createNotificationSettingsStyles = (theme: Theme) => StyleSheet.create({
  settingsCard: {
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
  settingsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginLeft: 8,
  },
  settingsContent: {
    // Content handled by SwitchItem components
  },
});