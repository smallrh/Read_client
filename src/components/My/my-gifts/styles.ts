import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../../context/ThemeContext';

const { width } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 50,
    backgroundColor: theme.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: theme.surface,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
  },
  actionButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: theme.surface,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },

  // Scroll View
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 80,
  },

  // Stats Card
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  // Categories
  categoriesCard: {
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
  categoriesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
  categoriesScroll: {
    paddingRight: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.border,
    marginRight: 12,
    gap: 8,
  },
  categoryItemActive: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.textSecondary,
  },
  categoryTextActive: {
    color: theme.surface,
  },

  // Redeem Code
  redeemCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 20,
    marginBottom: 24,
  },
  redeemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  redeemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  redeemCloseButton: {
    padding: 4,
  },
  redeemInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  redeemInput: {
    flex: 1,
    height: 44,
    backgroundColor: theme.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.text,
    borderWidth: 1,
    borderColor: theme.border,
  },
  redeemButton: {
    backgroundColor: theme.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  redeemButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.surface,
  },

  // Gifts List
  giftsCard: {
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
  giftsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  giftsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  giftsCount: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  giftsList: {
    gap: 16,
  },

  // Gift Item
  giftItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.border,
  },
  giftIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: theme.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  giftContent: {
    flex: 1,
  },
  giftMainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  giftName: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    flex: 1,
  },
  giftStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  giftStatusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  giftDescription: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  giftDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  giftValue: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.primary,
  },
  giftSource: {
    fontSize: 12,
    color: theme.textMuted,
  },
  giftFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  giftDate: {
    fontSize: 12,
    color: theme.textMuted,
  },
  giftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  useButton: {
    backgroundColor: theme.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  useButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.surface,
  },
  deleteButton: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.error,
  },

  // Tips
  tipsCard: {
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipsIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
    marginTop: 8,
    marginRight: 12,
  },
  tipsContent: {
    flex: 1,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  tipsText: {
    fontSize: 12,
    color: theme.textSecondary,
    lineHeight: 18,
  },
});