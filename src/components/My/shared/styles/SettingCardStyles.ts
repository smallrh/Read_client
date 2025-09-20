import { StyleSheet } from 'react-native';
import { Theme } from '../../../../context/ThemeContext';

export const createSettingCardStyles = (theme: Theme) => StyleSheet.create({
  settingCard: {
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
  lastCard: {
    marginBottom: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    padding: 8,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  cardContent: {
    // Content styles will be handled by children
  },
});