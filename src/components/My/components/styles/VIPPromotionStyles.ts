import { StyleSheet } from 'react-native';
import { Theme } from '../../../../context/ThemeContext';

export const createVIPPromotionStyles = (theme: Theme) => StyleSheet.create({
  vipSection: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  vipCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f59e0b',
    overflow: 'hidden',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  vipContent: {
    padding: 20,
  },
  vipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  vipIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400e',
    marginLeft: 8,
  },
  vipDescription: {
    fontSize: 14,
    color: '#92400e',
    lineHeight: 20,
    marginBottom: 16,
  },
  vipActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vipButton: {
    backgroundColor: '#f59e0b',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  vipButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  vipPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#92400e',
  },
});