// styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { Theme } from '../../context/ThemeContext';

const { width } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  heroContainer: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  heroContent: {
    marginTop: 20,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: theme.textSecondary,
  },
  searchContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
    zIndex: 10,
  },
  searchInput: {
    width: '100%',
    paddingLeft: 48,
    paddingRight: 16,
    paddingVertical: 16,
    backgroundColor: theme.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.border,
    fontSize: 16,
    color: theme.text,
  },
  featuredContainer: {
    padding: 20,
    marginTop: -10,
  },
  featuredNovel: {
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
  },
  featuredGradient: {
    padding: 20,
  },
  featuredContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredImageContainer: {
    position: 'relative',
    marginRight: 16,
  },
  featuredImage: {
    width: 80,
    height: 110,
    borderRadius: 12,
  },
  featuredBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: theme.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  featuredBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  featuredInfo: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 4,
  },
  featuredAuthor: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 12,
    lineHeight: 18,
  },
  featuredRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  featuredRatingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
  },
  featuredChapters: {
    fontSize: 12,
    color: theme.textSecondary,
    marginLeft: 12,
  },
  readButton: {
    backgroundColor: theme.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  readButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  categoriesContainer: {
    padding: 20,
    paddingTop: 0,
  },
  categoriesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  categoryItem: {
    width: (width - 56) / 4,
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    marginBottom: 12,
  },
  categoryIcon: {
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.text,
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  moreButton: {
    color: theme.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  horizontalScroll: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  popularBook: {
    width: 120,
    marginRight: 16,
  },
  popularBookImage: {
    width: 120,
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  popularBookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  popularBookAuthor: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  popularBookRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularBookRatingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: theme.text,
  },
  recentUpdatesContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  recentUpdateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    marginBottom: 8,
  },
  recentUpdateImage: {
    width: 48,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  recentUpdateInfo: {
    flex: 1,
  },
  recentUpdateTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  recentUpdateAuthor: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  recentUpdateChapter: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  recentUpdateMeta: {
    alignItems: 'flex-end',
  },
  recentUpdateRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  recentUpdateRatingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: theme.text,
  },
  recentUpdateTime: {
    fontSize: 12,
    color: theme.primary,
    fontWeight: '600',
  },
  recommendedContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  recommendedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recommendedBook: {
    width: (width - 48) / 2,
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
  },
  recommendedBookImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  recommendedBookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  recommendedBookAuthor: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  recommendedBookMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recommendedBookRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recommendedBookRatingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
    color: theme.text,
  },
  recommendedBookChapters: {
    fontSize: 12,
    color: theme.textSecondary,
  },
});