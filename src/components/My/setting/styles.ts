
import { StyleSheet } from 'react-native';
import { Theme } from '../../../context/ThemeContext';
export const createSettingsStyles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  
  // Header
  header: {
    borderBottomWidth: 1,
    borderBottomColor: theme.border,
    elevation: 2,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.text,
  },
  placeholder: {
    width: 40,
  },
  
  // ScrollView
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  
  // Setting Cards
  settingCard: {
    backgroundColor: theme.card,
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: theme.border,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  lastCard: {
    marginBottom: 24,
  },
  
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: theme.primaryLight,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 14,
    color: theme.textSecondary,
  },
  
  // Font Size Settings
  fontSizeContainer: {
    gap: 16,
  },
  settingLabel: {
    fontSize: 14,
    color: theme.textSecondary,
    marginBottom: 8,
  },
  fontSizeGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  fontSizeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.border,
    alignItems: 'center',
    backgroundColor: theme.surface,
  },
  fontSizeButtonActive: {
    borderColor: theme.primary,
    backgroundColor: theme.primaryLight,
  },
  fontSizePreview: {
    fontWeight: '600',
    color: theme.text,
    marginBottom: 4,
  },
  fontSizePreviewActive: {
    color: theme.primary,
  },
  fontSizeName: {
    fontSize: 12,
    color: theme.textSecondary,
  },
  fontSizeNameActive: {
    color: theme.primary,
    fontWeight: '500',
  },
  
  // Theme Settings - 2x2 Grid Layout
  themesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16, // 行间距
    columnGap: 12, // 列间距
  },
  themeButton: {
    width: '47%', // 每个按钮占容器宽度的47%，确保2列布局
    aspectRatio: 1.2, // 设置宽高比，使按钮更美观
    position: 'relative',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.border,
    alignItems: 'center',
    backgroundColor: theme.surface,
  },
  themeButtonActive: {
    borderColor: theme.primary,
  },
  themePreview: {
    width: '100%',
    height: 64,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: 'hidden',
  },
  themePreviewContent: {
    padding: 8,
    flex: 1,
    justifyContent: 'center',
  },
  themeLine: {
    height: 3,
    borderRadius: 2,
    marginBottom: 4,
  },
  themeLineShort: {
    width: '75%',
  },
  themeLineVeryShort: {
    width: '50%',
    marginBottom: 0,
  },
  themeName: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.text,
  },
  themeActiveIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.primary,
  },
  
  // Reading Mode
  readingModeContainer: {
    gap: 12,
  },
  readingModeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.border,
    backgroundColor: theme.surface,
  },
  readingModeItemActive: {
    borderColor: theme.primary,
    backgroundColor: theme.primaryLight,
  },
  readingModeContent: {
    flex: 1,
  },
  readingModeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  readingModeDescription: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonActive: {
    borderColor: theme.primary,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.primary,
  },
  
  // Advanced Settings
  advancedSettings: {
    gap: 24,
  },
  switchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchItemContent: {
    flex: 1,
  },
  switchItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.text,
    marginBottom: 2,
  },
  switchItemDescription: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  
  // Slider
  sliderItem: {
    gap: 12,
  },
  sliderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderValue: {
    fontSize: 14,
    color: theme.textSecondary,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});