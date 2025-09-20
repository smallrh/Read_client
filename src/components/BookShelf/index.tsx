import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

// 首先，在文件顶部添加这些类型定义
interface Tab {
  id: string;
  label: string;
  count: number;
  icon: string;
  color: string;
}

interface Novel {
  id: number;
  title: string;
  author: string;
  chapters: number;
  rating: number;
}
// 模拟数据
const novels = [
  { id: 1, title: '三体', author: '刘慈欣', chapters: 50, rating: 4.8 },
  { id: 2, title: '百年孤独', author: '加西亚·马尔克斯', chapters: 20, rating: 4.7 },
  { id: 3, title: '活着', author: '余华', chapters: 15, rating: 4.9 },
  { id: 4, title: '1984', author: '乔治·奥威尔', chapters: 23, rating: 4.6 },
  { id: 5, title: '平凡的世界', author: '路遥', chapters: 60, rating: 4.7 },
  { id: 6, title: '哈利·波特', author: 'J.K.罗琳', chapters: 70, rating: 4.8 },
];

interface LibraryProps {
  onNovelClick: (novel: any) => void;
}

const Library: React.FC<LibraryProps> = ({ onNovelClick }) => {
  const [selectedTab, setSelectedTab] = useState('reading');
  const { theme } = useTheme();
  const styles = createStyles(theme);

  // 模拟用户书架数据
  const readingNovels = novels.slice(0, 4);
  const favoriteNovels = novels.slice(1, 5);
  const downloadedNovels = novels.slice(0, 3);

  const tabs = [
    {
      id: 'reading',
      label: '在读',
      count: readingNovels.length,
      icon: 'menu-book',
      color: '#3b82f6'
    },
    {
      id: 'favorite',
      label: '收藏',
      count: favoriteNovels.length,
      icon: 'favorite',
      color: '#ec4899'
    },
    {
      id: 'download',
      label: '下载',
      count: downloadedNovels.length,
      icon: 'file-download',
      color: '#10b981'
    }
  ];

  const getCurrentNovels = () => {
    switch (selectedTab) {
      case 'reading':
        return readingNovels;
      case 'favorite':
        return favoriteNovels;
      case 'download':
        return downloadedNovels;
      default:
        return [];
    }
  };

  const getReadingProgress = (index: number) => {
    const progressList = [45, 78, 23, 89, 12];
    return progressList[index] || 0;
  };

  const renderTabButton = ({ id, label, count, icon, color }: Tab) => (
    <TouchableOpacity
      key={id}
      onPress={() => setSelectedTab(id)}
      style={[
        styles.tabButton,
        selectedTab === id && styles.tabButtonActive
      ]}
    >
      <View style={styles.tabContent}>
        <MaterialIcons
          name={icon}
          size={18}
          color={selectedTab === id ? '#fff' : color}
        />
        <Text style={[
          styles.tabLabel,
          selectedTab === id && styles.tabLabelActive
        ]}>
          {label}
        </Text>
        {count > 0 && (
          <View style={[
            styles.tabCount,
            selectedTab === id ? styles.tabCountActive : styles.tabCountInactive
          ]}>
            <Text style={[
              styles.tabCountText,
              selectedTab === id && styles.tabCountTextActive
            ]}>
              {count}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderNovelItem = ({ item, index }: { item: Novel; index: number }) => (
    <TouchableOpacity
      style={styles.novelItem}
      onPress={() => onNovelClick(item)}
    >
      <View style={styles.novelContent}>
        <View style={styles.bookCoverContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1582203914614-e23623afc345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZWFkaW5nJTIwYm9va3MlMjBsaWJyYXJ5fGVufDF8fHx8MTc1NjY0NDUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }}
            style={styles.bookCover}
          />
          {selectedTab === 'reading' && (
            <View style={styles.readingBadge}>
              <MaterialIcons name="play-arrow" size={12} color="#fff" />
            </View>
          )}
        </View>

        <View style={styles.novelInfo}>
          <Text style={styles.novelTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.novelAuthor}>{item.author}</Text>

          {selectedTab === 'reading' && (
            <View style={styles.progressContainer}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressText}>
                  读到：第{Math.floor(item.chapters * getReadingProgress(index) / 100)}章
                </Text>
                <Text style={styles.progressPercent}>{getReadingProgress(index)}%</Text>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${getReadingProgress(index)}%` }
                  ]}
                />
              </View>
            </View>
          )}

          <View style={styles.novelMeta}>
            <View style={styles.metaItems}>
              <View style={styles.metaItem}>
                <MaterialIcons name="star" size={12} color="#f59e0b" />
                <Text style={styles.metaText}>{item.rating}</Text>
              </View>
              <View style={styles.metaItem}>
                <MaterialIcons name="access-time" size={12} color="#6b7280" />
                <Text style={styles.metaText}>2天前</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.moreButton}
              onPress={(e) => {
                e.stopPropagation();
                // 处理更多操作
              }}
            >
              <MaterialIcons name="more-horiz" size={16} color="#6b7280" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyIconContainer}>
        {selectedTab === 'reading' && (
          <MaterialIcons name="menu-book" size={32} color="#9ca3af" />
        )}
        {selectedTab === 'favorite' && (
          <MaterialIcons name="favorite" size={32} color="#9ca3af" />
        )}
        {selectedTab === 'download' && (
          <MaterialIcons name="file-download" size={32} color="#9ca3af" />
        )}
      </View>
      <Text style={styles.emptyTitle}>
        {selectedTab === 'reading' && '暂无在读小说'}
        {selectedTab === 'favorite' && '暂无收藏小说'}
        {selectedTab === 'download' && '暂无下载小说'}
      </Text>
      <Text style={styles.emptyDescription}>
        {selectedTab === 'reading' && '开始阅读你的第一本小说吧'}
        {selectedTab === 'favorite' && '收藏喜欢的小说，随时回来阅读'}
        {selectedTab === 'download' && '下载小说，离线也能畅快阅读'}
      </Text>
      <TouchableOpacity style={styles.discoverButton}>
        <Text style={styles.discoverButtonText}>去发现好书</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>我的书架</Text>
          <Text style={styles.headerSubtitle}>
            {getCurrentNovels().length > 0 ? `共 ${getCurrentNovels().length} 本书籍` : '开始你的阅读之旅'}
          </Text>
        </View>
      </View>

      {/* Enhanced Tabs */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabs}>
          {tabs.map(renderTabButton)}
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {getCurrentNovels().length > 0 ? (
          <FlatList
            data={getCurrentNovels()}
            renderItem={renderNovelItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.novelList}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          renderEmptyState()
        )}
      </View>
    </View>
  );
};

export default Library;