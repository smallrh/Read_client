import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createReadingStatsStyles = (theme: Theme) => StyleSheet.create({
  statsCard: {
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
  statsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statsIconContainer: {
    padding: 8,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    marginRight: 12,
  },
  statsHeaderText: {
    flex: 1,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 2,
  },
  statsSubtitle: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '48%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 2,
  },
  statUnit: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.textSecondary,
    textAlign: 'center',
  },
});