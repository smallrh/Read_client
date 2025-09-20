import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar,
  TextInput,
  Image,
  Platform 
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../context/ThemeContext';
import { createStyles } from './styles';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import EmptyState from './EmptyState';
import { mockReadingHistory, mockStats, ReadingRecord } from './mockData';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ReadingHistory: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const [searchQuery, setSearchQuery] = useState('');
  const [readingHistory, setReadingHistory] = useState<ReadingRecord[]>(mockReadingHistory);

  const filteredHistory = readingHistory.filter(item =>
    item.novel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.novel.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatProgress = (progress: number) => {
    if (progress === 100) return '已完结';
    return `${progress}%`;
  };

  const handleNovelClick = (record: ReadingRecord) => {
    // 这里可以导航到小说详情页或继续阅读
    console.log('点击小说:', record.novel.title);
  };

  const handleClearHistory = () => {
    setReadingHistory([]);
  };

  const handleStartReading = () => {
    // 导航到首页或书架
    navigation.navigate('MainTabs');
  };

  if (readingHistory.length === 0) {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle={isDarkMode ? "light-content" : "dark-content"} 
          backgroundColor={theme.background} 
        />
        
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}
          >
            <MaterialIcon name="arrow-back" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>阅读历史</Text>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcon name="filter-list" size={20} color={theme.textSecondary} />
          </TouchableOpacity>
        </View>

        <EmptyState onStartReading={handleStartReading} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.background} 
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>阅读历史</Text>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcon name="filter-list" size={20} color={theme.textSecondary} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stats */}
        <View style={styles.statsGrid}>
          {mockStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statIconContainer}>
                <MaterialIcon name={stat.icon} size={20} color={theme.primary} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialIcon name="search" size={20} color={theme.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="搜索阅读记录..."
            placeholderTextColor={theme.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* History List */}
        <View style={styles.historyCard}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>最近阅读</Text>
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={handleClearHistory}
            >
              <MaterialIcon name="delete" size={16} color={theme.error} />
              <Text style={styles.clearButtonText}>清空记录</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.historyList}>
            {filteredHistory.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.historyItem,
                  index !== filteredHistory.length - 1 && styles.historyItemBorder
                ]}
                onPress={() => handleNovelClick(item)}
                activeOpacity={0.7}
              >
                <View style={styles.historyItemContent}>
                  <View style={styles.bookCoverContainer}>
                    <Image
                      source={{ uri: item.novel.cover }}
                      style={styles.bookCover}
                      onError={() => console.log('Image load error')}
                    />
                    {/* Progress indicator */}
                    <View style={styles.progressIndicator}>
                      <Text style={styles.progressText}>
                        {item.progress === 100 ? '✓' : Math.round(item.progress / 10)}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.bookInfo}>
                    <Text style={styles.bookTitle} numberOfLines={1}>
                      {item.novel.title}
                    </Text>
                    <Text style={styles.bookAuthor} numberOfLines={1}>
                      {item.novel.author}
                    </Text>
                    <Text style={styles.lastChapter} numberOfLines={1}>
                      {item.lastChapter}
                    </Text>
                    
                    {/* Progress bar */}
                    <View style={styles.progressBarContainer}>
                      <View style={styles.progressBar}>
                        <View 
                          style={[
                            styles.progressBarFill,
                            { width: `${item.progress}%` }
                          ]}
                        />
                      </View>
                    </View>

                    <View style={styles.bookMeta}>
                      <View style={styles.bookMetaLeft}>
                        <Text style={styles.metaText}>{formatProgress(item.progress)}</Text>
                        <Text style={styles.metaText}>{item.readTime}</Text>
                      </View>
                      <Text style={styles.metaText}>{item.lastReadTime}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionButton}>
            <MaterialIcon name="file-download" size={20} color={theme.primary} />
            <Text style={styles.quickActionText}>导出记录</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.quickActionButton, styles.primaryButton]}>
            <MaterialIcon name="menu-book" size={20} color={theme.surface} />
            <Text style={[styles.quickActionText, styles.primaryButtonText]}>继续阅读</Text>
          </TouchableOpacity>
        </View>

        {/* Tips */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsIndicator} />
          <View style={styles.tipsContent}>
            <Text style={styles.tipsTitle}>小贴士</Text>
            <Text style={styles.tipsText}>
              阅读记录会自动同步到云端，换设备也不会丢失。记录保存30天，可在设置中调整。
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReadingHistory;