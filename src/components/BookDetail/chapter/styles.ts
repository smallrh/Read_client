import { StyleSheet, Dimensions, Platform } from 'react-native';
import { Theme } from '../../../context/ThemeContext';

const { width } = Dimensions.get('window');

export const createStyles = (theme: Theme) => StyleSheet.create({
  // 章节统计卡片
  statsCard: {
    backgroundColor: theme.primaryLight,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statValueGreen: {
    color: '#10b981',
  },
  statValueBlue: {
    color: theme.primary,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },

  // 快捷操作按钮
  quickActions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: 12,
    gap: 6,
  },
  quickActionText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  // 章节列表卡片
  chapterListCard: {
    backgroundColor: 'rgba(248, 249, 250, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 100, // 为底部操作栏留空间
  },
  chapterListHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  headerLeftSection: {
    flex: 1,
  },
  chapterListTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  scrollProgress: {
    fontSize: 11,
    color: theme.primary,
    marginTop: 2,
    fontWeight: '400',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sortLabel: {
    fontSize: 12,
    color: '#666',
  },
  sortToggleText: {
    fontSize: 12,
    color: theme.primary,
    fontWeight: '500',
  },

  // 搜索栏
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
    padding: 0,
  },

  // 章节列表滚动视图
  chaptersScrollView: {
    flex: 1,
    minHeight: 400, // 增加最小高度，确保有足够的滚动空间
    // 移除maxHeight限制，允许完全自由滑动
  },

  // 章节项
  chapterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.02)',
    backgroundColor: theme.card,
  },
  lastChapterItem: {
    borderBottomWidth: 0,
  },
  chapterContent: {
    flex: 1,
  },
  chapterTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chapterTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 8,
  },
  chapterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chapterMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chapterInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chapterDate: {
    fontSize: 12,
    color: '#999',
  },
  wordCount: {
    fontSize: 12,
    color: '#999',
  },

  // 章节右侧区域
  chapterRight: {
    alignItems: 'center',
    gap: 8,
  },
  freeTag: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  freeTagText: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '500',
  },
  paidTag: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  paidTagText: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: '500',
  },
  readingIndicator: {
    width: 8,
    height: 8,
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },

  // 底部固定操作栏
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.08)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  bottomActionButtonSecondary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: '#3b82f6',
    borderRadius: 16,
    gap: 8,
  },
  bottomActionTextSecondary: {
    fontSize: 16,
    color: theme.primary,
    fontWeight: '600',
  },
  bottomActionButtonPrimary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    gap: 8,
  },
  bottomActionTextPrimary: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },

  // 滚动到顶部按钮
  scrollToTopButton: {
    position: 'absolute',
    right: 16,
    bottom: 16, // 在章节列表卡片内部的位置
    width: 48,
    height: 48,
    backgroundColor: '#3b82f6',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  // 加载更多按钮
  loadMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
    gap: 8,
  },
  loadMoreText: {
    fontSize: 14,
    color: theme.primary,
    fontWeight: '500',
  },
});