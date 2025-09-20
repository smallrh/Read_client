import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../context/ThemeContext';

export const createCheckinStatusCardStyles = (theme: Theme) => StyleSheet.create({
  checkinStatusCard: {
    position: 'relative',
    backgroundColor: theme.primaryLight,
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.primary,
  },
  backgroundDecoration: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: `${theme.primary}20`,
    transform: [{ translateX: 32 }, { translateY: -32 }],
  },
  checkinContent: {
    position: 'relative',
    zIndex: 1,
  },
  checkinHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkinIconContainer: {
    padding: 12,
    backgroundColor: theme.primary,
    borderRadius: 16,
    marginRight: 12,
  },
  checkinHeaderText: {
    flex: 1,
  },
  checkinTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  checkinSubtitle: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  checkinButton: {
    backgroundColor: theme.primary,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: theme.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  checkinButtonDisabled: {
    backgroundColor: theme.border,
    shadowOpacity: 0,
    elevation: 0,
  },
  checkinButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.surface,
  },
  checkinButtonTextDisabled: {
    color: theme.textMuted,
  },
});