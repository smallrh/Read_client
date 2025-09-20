import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { Novel } from '../../types/novel';
import { novels } from '../../data/novels';

const { width } = Dimensions.get('window');

interface HomePageProps {
  onNovelClick: (novel: Novel) => void;
}

// 图标组件
const Icon = ({ name, size = 24, color = '#000' }: { name: string, size?: number, color?: string }) => {
  const icons: Record<string, string> = {
    Search: '🔍',
    BookOpen: '📖',
    TrendingUp: '📈',
    Star: '⭐',
    Heart: '❤️',
    Clock: '⏰'
  };

  return (
    <Text style={{ fontSize: size, color }}>
      {icons[name] || '❓'}
    </Text>
  );
};

// 图片回退组件
const ImageWithFallback = ({
  src,
  alt,
  style
}: {
  src: any,
  alt: string,
  style: any
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <View style={[style, { backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#888', fontSize: 12 }}>图片加载失败</Text>
      </View>
    );
  }

  return (
    <Image
      source={src}
      style={style}
      onError={() => setError(true)}
      accessibilityLabel={alt}
    />
  );
};

export default function HomePage({ onNovelClick }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const featuredNovel = novels[0];
  const popularNovels = novels.slice(1, 7);
  const recentNovels = novels.slice(7, 13);
  const recommendedNovels = novels.slice(13, 19);

  const categories = [
    { icon: 'BookOpen', label: '玄幻' },
    { icon: 'Heart', label: '言情' },
    { icon: 'TrendingUp', label: '都市' },
    { icon: 'Clock', label: '历史' }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header with Hero Section */}
      <LinearGradient
        colors={['rgba(120, 119, 198, 0.1)', 'rgba(255, 255, 255, 0.1)']}
        style={styles.heroContainer}
      >
        <View style={styles.heroContent}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>欢迎回来</Text>
            <Text style={styles.welcomeSubtitle}>发现你的下一本好书</Text>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchIcon}>
              <Icon name="Search" size={20} color="#888" />
            </View>
            <TextInput
              placeholder="搜索小说、作者或分类..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              style={styles.searchInput}
              placeholderTextColor="#888"
            />
          </View>
        </View>
      </LinearGradient>

      <View style={styles.featuredContainer}>
        <TouchableOpacity
          style={styles.featuredNovel}
          onPress={() => onNovelClick(featuredNovel)}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['rgba(120, 119, 198, 0.05)', 'rgba(255, 255, 255, 0.05)']}
            style={styles.featuredGradient}
          >
            <View style={styles.featuredContent}>
              <View style={styles.featuredImageContainer}>
                <ImageWithFallback
                  src={{ uri: 'https://images.unsplash.com/photo-1711185900806-bf85e7fe7767' }}
                  alt={featuredNovel.title}
                  style={styles.featuredImage}
                />
                <View style={styles.featuredBadge}>
                  <Text style={styles.featuredBadgeText}>热门</Text>
                </View>
              </View>
              <View style={styles.featuredInfo}>
                <Text style={styles.featuredTitle} numberOfLines={2}>
                  {featuredNovel.title}
                </Text>
                <Text style={styles.featuredAuthor}>{featuredNovel.author}</Text>
                <Text style={styles.featuredDescription} numberOfLines={3}>
                  {featuredNovel.description}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                  <View style={styles.featuredRating}>
                    <Icon name="Star" size={16} color="#f59e0b" />
                    <Text style={styles.featuredRatingText}>{featuredNovel.rating}</Text>
                  </View>
                  <Text style={styles.featuredChapters}>{featuredNovel.chapters}章</Text>
                </View>
                <TouchableOpacity
                  style={styles.readButton}
                  onPress={() => onNovelClick(featuredNovel)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.readButtonText}>立即阅读</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Quick Categories */}
      <View style={styles.categoriesContainer}>
        <View style={styles.categoriesGrid}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoryItem}
              activeOpacity={0.7}
            >
              <View style={styles.categoryIcon}>
                <Icon name={category.icon} size={24} color="#3b82f6" />
              </View>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Popular Novels */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>热门推荐</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>更多</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {popularNovels.map((novel) => (
          <TouchableOpacity
            key={novel.id}
            style={styles.popularBook}
            onPress={() => onNovelClick(novel)}
            activeOpacity={0.7}
          >
            <ImageWithFallback
              src={{ uri: 'https://images.unsplash.com/photo-1711185901354-73cb6b666c32' }}
              alt={novel.title}
              style={styles.popularBookImage}
            />
            <Text style={styles.popularBookTitle} numberOfLines={2}>
              {novel.title}
            </Text>
            <Text style={styles.popularBookAuthor} numberOfLines={1}>
              {novel.author}
            </Text>
            <View style={styles.popularBookRating}>
              <Icon name="Star" size={14} color="#f59e0b" />
              <Text style={styles.popularBookRatingText}>{novel.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recent Updates */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>最近更新</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>更多</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentUpdatesContainer}>
        {recentNovels.slice(0, 4).map((novel) => (
          <TouchableOpacity
            key={novel.id}
            style={styles.recentUpdateItem}
            onPress={() => onNovelClick(novel)}
            activeOpacity={0.7}
          >
            <ImageWithFallback
              src={{ uri: 'https://images.unsplash.com/photo-1633680842723-2a0d770f2b74' }}
              alt={novel.title}
              style={styles.recentUpdateImage}
            />
            <View style={styles.recentUpdateInfo}>
              <Text style={styles.recentUpdateTitle} numberOfLines={1}>
                {novel.title}
              </Text>
              <Text style={styles.recentUpdateAuthor} numberOfLines={1}>
                {novel.author}
              </Text>
              <Text style={styles.recentUpdateChapter}>
                更新至第{novel.chapters}章
              </Text>
            </View>
            <View style={styles.recentUpdateMeta}>
              <View style={styles.recentUpdateRating}>
                <Icon name="Star" size={14} color="#f59e0b" />
                <Text style={styles.recentUpdateRatingText}>{novel.rating}</Text>
              </View>
              <Text style={styles.recentUpdateTime}>刚刚</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recommended for You */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>为你推荐</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>刷新</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recommendedContainer}>
        <View style={styles.recommendedGrid}>
          {recommendedNovels.slice(0, 4).map((novel) => (
            <TouchableOpacity
              key={novel.id}
              style={styles.recommendedBook}
              onPress={() => onNovelClick(novel)}
              activeOpacity={0.7}
            >
              <ImageWithFallback
                src={{ uri: 'https://images.unsplash.com/photo-1604435062356-a880b007922c' }}
                alt={novel.title}
                style={styles.recommendedBookImage}
              />
              <Text style={styles.recommendedBookTitle} numberOfLines={2}>
                {novel.title}
              </Text>
              <Text style={styles.recommendedBookAuthor} numberOfLines={1}>
                {novel.author}
              </Text>
              <View style={styles.recommendedBookMeta}>
                <View style={styles.recommendedBookRating}>
                  <Icon name="Star" size={14} color="#f59e0b" />
                  <Text style={styles.recommendedBookRatingText}>{novel.rating}</Text>
                </View>
                <Text style={styles.recommendedBookChapters}>
                  {novel.chapters}章
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}