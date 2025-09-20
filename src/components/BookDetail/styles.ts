import { StyleSheet, Platform } from 'react-native';
import { Theme } from '../../context/ThemeContext';


export const createStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  scrollView: {
    flex: 1,
  },

  // Sticky Header - 纯React Native实现
  stickyHeader: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: Platform.select({
      ios: theme.card,     // iOS 半透明
      android: theme.card, // Android 半透明
    }),

    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    // 添加阴影效果增强视觉层次
    ...Platform.select({
      ios: {
        shadowColor: theme.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: Platform.select({
      ios: 50, // iOS考虑状态栏高度
      android: 50,
    }),
    position: 'relative',
  },
  headerTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.select({
      ios: 50, // 从paddingTop开始
      android: 50,
    }),
    bottom: 12, // 到paddingBottom结束
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
    textAlign: 'center',
  },

  // Hero Section
  heroContainer: {
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.overlay,
  },

  heroContent: {
    position: 'relative',
    padding: 24,
  },

  bookInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },

  coverContainer: {
    position: 'relative',
    marginRight: 24,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: theme.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },

  coverImage: {
    width: 128,
    height: 176,
    borderRadius: 16,
  },

  coverGlow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },

  bookMeta: {
    flex: 1,
    paddingTop: 8,
  },

  bookTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 8,
    lineHeight: 28,
  },

  bookAuthor: {
    fontSize: 16,
    color: theme.textSecondary,
    marginBottom: 16,
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },

  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  statIconContainer: {
    padding: 8,
    backgroundColor: theme.primaryLight,
    borderRadius: 8,
  },

  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.text,
  },

  statLabel: {
    fontSize: 12,
    color: theme.textSecondary,
  },

  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },

  statusBadge: {
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    fontWeight: '500',
  },

  statusOngoing: {
    backgroundColor: 'rgba(16,185,129,0.2)',
    color: theme.success,
  },

  statusFinished: {
    backgroundColor: theme.primaryLight,
    color: theme.primary,
  },

  categoryBadge: {
    fontSize: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: theme.surface,
    color: theme.text,
    fontWeight: '500',
  },

  chaptersBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },

  chaptersBadgeText: {
    fontSize: 12,
    color: theme.textSecondary,
    fontWeight: '500',
  },

  // Content Container
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 80,
    backgroundColor: theme.surface,
  },

  // Tags Section
  tagsContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  tagsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  tagsLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.textSecondary,
  },
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    fontSize: 14,
    color: theme.primary,
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    fontWeight: '500',
  },

  // Section
  sectionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Description
  descriptionCard: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    padding: 16,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    color: theme.textSecondary,
    textAlign: 'justify',
  },

  // 查看完整简介引导按钮
  viewFullButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 2,
  },
  viewFullButtonText: {
    fontSize: 14,
    color: theme.primary,
    fontWeight: '500',
  },

  // Modal Styles - 95%还原Web端设计
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  modalContainer: {
    backgroundColor: theme.card + 'F2', // 95% opacity like backdrop-blur
    borderRadius: 24, // rounded-3xl (24px)
    width: '90%', // w-[90vw]
    maxWidth: 400, // max-w-md
    maxHeight: '85%',
    borderWidth: 1,
    borderColor: theme.border + '33', // border-border/20
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25, // shadow-2xl
    shadowRadius: 25,
    elevation: 15,
    overflow: 'hidden',
  },

  // Header - 完全还原Web端Header设计
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24, // p-6
    paddingVertical: 24,
    paddingBottom: 16, // pb-4
    borderBottomWidth: 1,
    borderBottomColor: theme.border + '1A', // border-border/10
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12, // gap-3
  },
  headerIconContainer: {
    padding: 8, // p-2
    backgroundColor: theme.primary + '1A', // bg-primary/10
    borderRadius: 12, // rounded-xl
  },
  modalTitle: {
    fontSize: 18, // text-lg
    fontWeight: '600', // font-semibold
    color: theme.text,
  },
  closeButton: {
    padding: 8, // p-2
    borderRadius: 20, // rounded-full
    backgroundColor: 'transparent',
  },

  // Content Container
  modalContentContainer: {
    paddingHorizontal: 24, // p-6
    paddingTop: 0, // pt-0
    paddingBottom: 24,
  },

  // Novel Info Section
  novelInfoSection: {
    marginBottom: 16, // mb-4
    paddingTop: 16, // pt-4
  },
  novelTitle: {
    fontSize: 16,
    fontWeight: '600', // font-semibold
    color: theme.text,
    marginBottom: 8, // mb-2
  },
  novelAuthor: {
    fontSize: 14, // text-sm
    color: theme.textSecondary, // text-muted-foreground
    marginBottom: 16, // mb-4
  },

  // Scrollable Description Container - 完全还原Web端ScrollArea
  descriptionScrollContainer: {
    backgroundColor: theme.surface + '4D', // bg-muted/30
    borderRadius: 16, // rounded-2xl
    overflow: 'hidden',
  },
  descriptionScrollArea: {
    height: 300, // min-h-[300px] 相当于 50vh
    maxHeight: 400, // max-h-[60vh]
  },
  scrollContent: {
    padding: 16, // p-4
  },
  webStyleDescription: {
    fontSize: 14, // text-sm
    color: theme.text, // text-foreground
    lineHeight: 22, // leading-relaxed
    textAlign: 'left', // 移除justify，保持自然对齐
  },

  // Action Buttons
  actionContainer: {
    marginBottom: 32,
  },
  primaryActions: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: theme.primary,
  },
  primaryButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: theme.primary,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: theme.surface,
  },
  secondaryButtonActive: {
    backgroundColor: theme.primary,
  },
  secondaryButtonText: {
    color: theme.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonTextActive: {
    color: '#ffffff',
  },
  downloadButton: {
    width: '100%',
    height: 48,
    backgroundColor: theme.card,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: theme.border,
  },
  downloadButtonText: {
    color: theme.textSecondary,
    fontSize: 16,
    fontWeight: '600',
  },

  // Chapters Section
  chaptersCard: {
    backgroundColor: theme.card,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 16,
    overflow: 'hidden',
  },
  chaptersHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
  },
  chaptersCount: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  chaptersList: {
    backgroundColor: theme.surface,
  },
  chapterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.divider,
  },
  chapterContent: {
    flex: 1,
  },
  chapterTitle: {
    fontSize: 16,
    color: theme.text,
    fontWeight: '500',
  },
  chapterMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chapterDate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  chapterDateText: {
    fontSize: 12,
    color: theme.textMuted,
  },
  freeTag: {
    backgroundColor: theme.primaryLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  freeTagText: {
    fontSize: 12,
    color: theme.primary,
    fontWeight: '500',
  },
  allChaptersButton: {
    padding: 16,
    backgroundColor: theme.surface,
    alignItems: 'center',
  },
  allChaptersButtonText: {
    color: theme.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});