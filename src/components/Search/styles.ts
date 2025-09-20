import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Theme } from '../../context/ThemeContext';

const { width, height } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },

  // Enhanced Search Header
  searchHeader: {
    backgroundColor: theme.primaryLight,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 28,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: theme.text,
    textAlign: 'center',
    marginBottom: 20,
  },

  // Search Bar
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 8,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
    maxWidth: width - 100, // 确保搜索栏为AI按钮留出空间
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.text,
    padding: 0,
    fontWeight: '400',
  },
  clearButton: {
    padding: 6,
    borderRadius: 12,
  },

  // Search Results
  resultsContainer: {
    flex: 1,
    backgroundColor: theme.surface,
  },
  resultsContent: {
    padding: 16,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
  },
  resultsCount: {
    color: theme.primary,
  },
  
  resultsList: {
    gap: 16,
  },
  resultItem: {
    flexDirection: 'row',
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  resultCover: {
    width: 80,
    height: 110,
    borderRadius: 12,
    marginRight: 16,
  },
  resultInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  resultAuthor: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  resultMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
  },
  chapters: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryBadge: {
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 12,
    color: theme.primary,
    fontWeight: '500',
  },

  // Loading State
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  loadingIcon: {
    width: 64,
    height: 64,
    backgroundColor: theme.primaryLight,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  loadingText: {
    fontSize: 16,
    color: theme.textSecondary,
  },

  // No Results
  noResultsContainer: {
    alignItems: 'center',
    paddingVertical: 64,
    paddingHorizontal: 32,
  },
  noResultsIcon: {
    width: 96,
    height: 96,
    backgroundColor: theme.surface,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  noResultsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  noResultsSubtitle: {
    fontSize: 14,
    color: theme.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  retryButtonText: {
    fontSize: 14,
    color: theme.primary,
    fontWeight: '500',
  },

  // Discovery Container
  discoveryContainer: {
    flex: 1,
    backgroundColor: theme.background,
    paddingBottom: 80,
  },

  // Section
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: theme.text,
  },

  // Categories
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - 48) / 3,
    alignItems: 'center',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  categoryIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.text,
    textAlign: 'center',
  },

  // Hot Searches
  hotSearchCard: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 16,
  },
  hotSearchGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hotSearchItem: {
    width: '48%',
    padding: 12,
    backgroundColor: theme.surface,
    borderRadius: 12,
    marginBottom: 12,
  },
  hotSearchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hotSearchLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  hotSearchRank: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.primary,
    minWidth: 20,
  },
  hotSearchKeyword: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
    flex: 1,
  },
  hotSearchTrend: {
    fontSize: 12,
    color: theme.success,
    fontWeight: '500',
  },

  // Recent Searches
  recentSearches: {
    gap: 12,
  },
  recentSearchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 16,
  },
  recentSearchText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
    flex: 1,
  },

  // Popular Novels
  popularNovelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  popularNovelCard: {
    width: (width - 48) / 2,
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  popularNovelCover: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  popularNovelInfo: {
    flex: 1,
  },
  popularNovelTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
    lineHeight: 18,
  },
  popularNovelAuthor: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  popularNovelMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popularNovelRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  popularNovelRatingText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.text,
  },
  popularNovelChapters: {
    fontSize: 12,
    color: theme.textSecondary,
  },

  // AI Search Toggle
  aiToggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: theme.surface,
    borderWidth: 1,
    borderColor: theme.border,
    gap: 4,
    width: 58,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  aiToggleButtonActive: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
    shadowColor: theme.primary,
    shadowOpacity: 0.25,
  },
  aiToggleText: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.primary,
    letterSpacing: 0.3,
  },
  aiToggleTextActive: {
    color: theme.surface,
  },

  // AI Search Results
  aiResultContainer: {
    backgroundColor: theme.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.primary + '20',
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  aiResultHeader: {
    marginBottom: 16,
  },
  aiLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: theme.primary + '15',
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  aiLabelText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.primary,
  },
  aiDescription: {
    fontSize: 16,
    color: theme.text,
    marginBottom: 20,
    lineHeight: 24,
  },

  // AI Analysis Card
  aiAnalysisCard: {
    backgroundColor: theme.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: theme.primary,
  },
  aiAnalysisTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 8,
  },
  aiAnalysisText: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  aiKeywords: {
    marginTop: 12,
  },
  aiKeywordsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 8,
  },
  keywordsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  keywordTag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: theme.primaryLight,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.primary + '30',
  },
  keywordText: {
    fontSize: 12,
    color: theme.primary,
    fontWeight: '500',
  },

  // AI Recommendations
  aiRecommendations: {
    marginTop: 16,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
    marginBottom: 16,
  },
  aiRecommendationItem: {
    flexDirection: 'row',
    backgroundColor: theme.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.border,
  },
  aiRecommendationInfo: {
    flex: 1,
    marginLeft: 16,
  },
  aiRecommendationReason: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 12,
    lineHeight: 18,
  },
  aiConfidence: {
    marginTop: 8,
  },
  confidenceText: {
    fontSize: 12,
    color: theme.text,
    fontWeight: '500',
    marginBottom: 6,
  },
  confidenceBar: {
    height: 4,
    backgroundColor: theme.surface,
    borderRadius: 2,
    overflow: 'hidden',
  },
  confidenceProgress: {
    height: '100%',
    backgroundColor: theme.success,
    borderRadius: 2,
  },
});