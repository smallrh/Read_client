import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { chapters } from '../../../data/novels';
import { getChapterTitle } from '../../../utils';
import Header from '../Header';
import { createStyles as createBookDetailStyles } from '../styles';
import { createStyles } from './styles';
import { useTheme } from '../../../context/ThemeContext';

type ChapterListRouteProp = RouteProp<RootStackParamList, 'ChapterList'>;
type ChapterListNavigationProp = StackNavigationProp<RootStackParamList, 'ChapterList'>;

interface ChapterListProps {
  route: ChapterListRouteProp;
  navigation: ChapterListNavigationProp;
}

const ChapterList: React.FC<ChapterListProps> = ({ route, navigation }) => {
  const { novelId, novelTitle, totalChapters } = route.params;
  const { theme, isDarkMode } = useTheme();
  const styles = createStyles(theme);
  const bookDetailStyles = createBookDetailStyles(theme);
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isLiked, setIsLiked] = useState(false);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(50); // 初始显示50个章节
  const flatListRef = React.useRef<FlatList>(null);

  // 使用debounce优化搜索性能
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchText]);

  // 基础章节数据 - 只在novelId和totalChapters变化时重新生成
  const baseChapters = useMemo(() => {
    const realChapters = chapters.filter(ch => ch.novelId === novelId).map((ch, index) => ({
      ...ch,
      chapterNumber: ch.chapterNumber || index + 1,
      wordCount: ch.wordCount || (2000 + Math.floor(Math.random() * 1000))
    }));

    // 缓存生成的章节，避免每次都重新创建
    const generatedChapters = [];
    const startIndex = realChapters.length;
    const now = Date.now();

    for (let i = startIndex; i < totalChapters; i++) {
      const chapterDate = new Date(now - (totalChapters - i) * 24 * 60 * 60 * 1000);
      generatedChapters.push({
        id: `${novelId}_${i + 1}`,
        novelId: novelId,
        title: `第${i + 1}章：${getChapterTitle(i, novelId)}`,
        content: '',
        isFree: i < 5,
        createdAt: chapterDate,
        chapterNumber: i + 1,
        publishDate: chapterDate.toISOString().split('T')[0],
        wordCount: 2000 + Math.floor(Math.random() * 1000)
      });
    }

    return [...realChapters, ...generatedChapters];
  }, [novelId, totalChapters]);

  // 排序章节 - 独立的memo，只在sortOrder变化时重新排序
  const novelChapters = useMemo(() => {
    return [...baseChapters].sort((a, b) => {
      const aNum = a.chapterNumber || parseInt(a.title.match(/第(\d+)章/)?.[1] || '0');
      const bNum = b.chapterNumber || parseInt(b.title.match(/第(\d+)章/)?.[1] || '0');
      return sortOrder === 'asc' ? aNum - bNum : bNum - aNum;
    });
  }, [baseChapters, sortOrder]);

  // 过滤章节 - 使用debounced搜索文本优化性能
  const allFilteredChapters = useMemo(() => {
    if (!debouncedSearchText.trim()) return novelChapters;
    const searchLower = debouncedSearchText.toLowerCase().trim();
    return novelChapters.filter(chapter =>
      chapter.title.toLowerCase().includes(searchLower)
    );
  }, [novelChapters, debouncedSearchText]);

  // 显示的章节 - 限制渲染数量提升性能
  const filteredChapters = useMemo(() => {
    return allFilteredChapters.slice(0, displayCount);
  }, [allFilteredChapters, displayCount]);

  // 是否显示"加载更多"按钮
  const hasMore = allFilteredChapters.length > displayCount;

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleChapterPress = useCallback((chapter: any) => {
    console.log('打开章节:', chapter.title);
    // 这里可以导航到阅读页面
  }, []);

  const handleShare = useCallback(() => {
    console.log('分享章节列表');
  }, []);

  const handleLike = useCallback(() => {
    setIsLiked(!isLiked);
  }, [isLiked]);

  const toggleSortOrder = useCallback(() => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    // 排序后重置显示数量，避免一次性渲染过多
    setDisplayCount(50);
  }, []);

  // 加载更多章节
  const loadMore = useCallback(() => {
    setDisplayCount(prev => Math.min(prev + 50, allFilteredChapters.length));
  }, [allFilteredChapters.length]);

  const clearSearch = useCallback(() => {
    setSearchText('');
  }, []);

  // 滚动监听优化
  const onViewableItemsChanged = useCallback(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentScrollIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewabilityConfig = useMemo(() => ({
    itemVisiblePercentThreshold: 50
  }), []);

  // 滚动到顶部功能
  const scrollToTop = useCallback(() => {
    flatListRef.current?.scrollToIndex({ index: 0, animated: true });
  }, []);

  // 优化的章节项组件 - 使用React.memo防止不必要的重新渲染
  const ChapterItem = React.memo(({ chapter, index, isLast, onPress }: {
    chapter: any;
    index: number;
    isLast: boolean;
    onPress: () => void;
  }) => {
    // 缓存计算结果
    const isDownloaded = index < 5;
    const isRead = index < 3;

    return (
      <TouchableOpacity
        style={[
          styles.chapterItem,
          isLast && styles.lastChapterItem
        ]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.chapterContent}>
          <View style={styles.chapterTitleRow}>
            <Text style={styles.chapterTitle} numberOfLines={1}>
              {chapter.title}
            </Text>
            <View style={styles.chapterIcons}>
              {!chapter.isFree && (
                <MaterialIcon name="lock" size={12} color="#f59e0b" />
              )}
              {isDownloaded && (
                <MaterialIcon name="file-download" size={12} color="#10b981" />
              )}
            </View>
          </View>
          <View style={styles.chapterMeta}>
            <View style={styles.chapterInfo}>
              <MaterialIcon name="access-time" size={10} color="#999" />
              <Text style={styles.chapterDate}>
                {chapter.publishDate || new Date(chapter.createdAt).toLocaleDateString()}
              </Text>
            </View>
            <Text style={styles.wordCount}>
              {chapter.wordCount}字
            </Text>
          </View>
        </View>

        <View style={styles.chapterRight}>
          {chapter.isFree ? (
            <View style={styles.freeTag}>
              <Text style={styles.freeTagText}>免费</Text>
            </View>
          ) : (
            <View style={styles.paidTag}>
              <Text style={styles.paidTagText}>付费</Text>
            </View>
          )}

          {/* 阅读进度指示器 */}
          {isRead && (
            <View style={styles.readingIndicator} />
          )}
        </View>
      </TouchableOpacity>
    );
  });

  // FlatList渲染函数
  const renderChapterItem = useCallback(({ item: chapter, index }: { item: any; index: number }) => (
    <ChapterItem
      chapter={chapter}
      index={index}
      isLast={index === filteredChapters.length - 1}
      onPress={() => handleChapterPress(chapter)}
    />
  ), [filteredChapters.length, handleChapterPress]);

  const keyExtractor = useCallback((item: any, index: number) => `${item.id}-${index}`, []);

  const getItemLayout = useCallback((_: any, index: number) => {
    const itemHeight = 72; // 根据样式调整：padding 16*2 + 内容约40px
    return {
      length: itemHeight,
      offset: itemHeight * index,
      index,
    };
  }, []);


  // 计算统计数据 - 使用memo优化
  const { freeChaptersCount, downloadedChaptersCount } = useMemo(() => {
    return {
      freeChaptersCount: allFilteredChapters.filter(ch => ch.isFree).length,
      downloadedChaptersCount: Math.min(5, allFilteredChapters.length) // 假设前5章已下载
    };
  }, [allFilteredChapters]);

  // Header组件
  const ListHeader = useCallback(() => (
    <>
      <Header
        title={novelTitle}
        isLiked={isLiked}
        onBack={handleBack}
        onShare={handleShare}
        onLike={handleLike}
      />

      <View style={bookDetailStyles.contentContainer}>
        {/* 章节统计卡片 */}
        <View style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{totalChapters}</Text>
              <Text style={styles.statLabel}>总章节</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.statValueGreen]}>{freeChaptersCount}</Text>
              <Text style={styles.statLabel}>免费章节</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, styles.statValueBlue]}>{downloadedChaptersCount}</Text>
              <Text style={styles.statLabel}>已下载</Text>
            </View>
          </View>
        </View>

        {/* 快捷操作按钮 */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton} onPress={() => console.log('批量下载')}>
            <MaterialIcon name="file-download" size={16} color="#666" />
            <Text style={styles.quickActionText}>批量下载</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton} onPress={() => console.log('最后阅读')}>
            <MaterialIcon name="bookmark" size={16} color="#666" />
            <Text style={styles.quickActionText}>最后阅读</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton} onPress={() => console.log('继续阅读')}>
            <MaterialIcon name="play-arrow" size={16} color="#666" />
            <Text style={styles.quickActionText}>继续阅读</Text>
          </TouchableOpacity>
        </View>

        {/* 章节列表头部 */}
        <View style={styles.chapterListHeader}>
          <View style={styles.chapterListHeader}>
            <View style={styles.headerLeftSection}>
              <Text style={styles.chapterListTitle}>章节目录</Text>
              {filteredChapters.length > 20 && (
                <Text style={styles.scrollProgress}>
                  {currentScrollIndex + 1} / {filteredChapters.length}
                </Text>
              )}
            </View>
            <View style={styles.sortContainer}>
              <Text style={styles.sortLabel}>
                {sortOrder === 'asc' ? '正序排列' : '倒序排列'}
              </Text>
              <TouchableOpacity onPress={toggleSortOrder}>
                <Text style={styles.sortToggleText}>
                  {sortOrder === 'asc' ? '倒序' : '正序'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>
      </View>
    </>
  ), [
    novelTitle, isLiked, handleBack, handleShare, handleLike, totalChapters,
    freeChaptersCount, downloadedChaptersCount, filteredChapters.length,
    currentScrollIndex, sortOrder, toggleSortOrder, searchText, setSearchText, clearSearch
  ]);

  return (
    <View style={bookDetailStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ScrollView
        style={bookDetailStyles.scrollView}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        scrollEventThrottle={16}
      >
        <Header
          title={novelTitle}
          isLiked={isLiked}
          onBack={handleBack}
          onShare={handleShare}
          onLike={handleLike}
        />

        <View style={bookDetailStyles.contentContainer}>
          {/* 章节统计卡片 */}
          <View style={styles.statsCard}>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{totalChapters}</Text>
                <Text style={styles.statLabel}>总章节</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, styles.statValueGreen]}>{freeChaptersCount}</Text>
                <Text style={styles.statLabel}>免费章节</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, styles.statValueBlue]}>{downloadedChaptersCount}</Text>
                <Text style={styles.statLabel}>已下载</Text>
              </View>
            </View>
          </View>

          {/* 快捷操作按钮 */}
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => console.log('批量下载')}>
              <MaterialIcon name="file-download" size={16} color="#666" />
              <Text style={styles.quickActionText}>批量下载</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => console.log('最后阅读')}>
              <MaterialIcon name="bookmark" size={16} color="#666" />
              <Text style={styles.quickActionText}>最后阅读</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton} onPress={() => console.log('继续阅读')}>
              <MaterialIcon name="play-arrow" size={16} color="#666" />
              <Text style={styles.quickActionText}>继续阅读</Text>
            </TouchableOpacity>
          </View>

          {/* 章节列表卡片 - 恢复原来的设计 */}
          <View style={styles.chapterListCard}>
            {/* 章节列表头部 */}
            <View style={styles.chapterListHeader}>
              <View style={styles.headerLeftSection}>
                <Text style={styles.chapterListTitle}>章节目录</Text>
                {filteredChapters.length > 20 && (
                  <Text style={styles.scrollProgress}>
                    {currentScrollIndex + 1} / {filteredChapters.length}
                  </Text>
                )}
              </View>
              <View style={styles.sortContainer}>
                <Text style={styles.sortLabel}>
                  {sortOrder === 'asc' ? '正序排列' : '倒序排列'}
                </Text>
                <TouchableOpacity onPress={toggleSortOrder}>
                  <Text style={styles.sortToggleText}>
                    {sortOrder === 'asc' ? '倒序' : '正序'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>



            {/* 章节列表 - 使用ScrollView替代FlatList避免嵌套警告 */}
            <ScrollView
              style={styles.chaptersScrollView}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={true}
            >
              {filteredChapters.map((chapter, index) => (
                <ChapterItem
                  key={`${chapter.id}-${index}`}
                  chapter={chapter}
                  index={index}
                  isLast={!hasMore && index === filteredChapters.length - 1}
                  onPress={() => handleChapterPress(chapter)}
                />
              ))}

              {/* 加载更多按钮 */}
              {hasMore && (
                <TouchableOpacity style={styles.loadMoreButton} onPress={loadMore}>
                  <Text style={styles.loadMoreText}>
                    加载更多章节 ({allFilteredChapters.length - displayCount} 剩余)
                  </Text>
                  <MaterialIcon name="keyboard-arrow-down" size={20} color="#3b82f6" />
                </TouchableOpacity>
              )}
            </ScrollView>

            {/* 滚动到顶部按钮 */}
            {currentScrollIndex > 10 && (
              <TouchableOpacity style={styles.scrollToTopButton} onPress={scrollToTop}>
                <MaterialIcon name="keyboard-arrow-up" size={24} color="#ffffff" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>

      {/* 底部固定操作栏 */}
      <View style={styles.bottomActionBar}>
        <TouchableOpacity style={styles.bottomActionButtonSecondary} onPress={() => console.log('下载全部')}>
          <MaterialIcon name="file-download" size={18} color="#3b82f6" />
          <Text style={styles.bottomActionTextSecondary}>下载全部</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomActionButtonPrimary} onPress={() => handleChapterPress(filteredChapters[0])}>
          <MaterialIcon name="play-arrow" size={18} color="#ffffff" />
          <Text style={styles.bottomActionTextPrimary}>开始阅读</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChapterList;
