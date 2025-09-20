import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Novel } from '../../types/novel';
import { formatViews } from '../../utils';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';

interface BookMetaProps {
  novel: Novel;
}

const BookMeta: React.FC<BookMetaProps> = ({ novel }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  return (
    <View style={styles.bookMeta}>
      <Text style={styles.bookTitle} numberOfLines={2}>
        {novel.title}
      </Text>
      <Text style={styles.bookAuthor}>{novel.author}</Text>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <MaterialIcon name="star" size={16} color="#f59e0b" />
          </View>
          <View>
            <Text style={styles.statValue}>{novel.rating}</Text>
            <Text style={styles.statLabel}>评分</Text>
          </View>
        </View>
        <View style={styles.statItem}>
          <View style={styles.statIconContainer}>
            <MaterialIcon name="visibility" size={16} color={theme.primary} />
          </View>
          <View>
            <Text style={styles.statValue}>{formatViews(novel.views)}</Text>
            <Text style={styles.statLabel}>阅读</Text>
          </View>
        </View>
      </View>

      {/* 状态 & 分类 */}
      <View style={styles.badgeContainer}>
        <Text
          style={[
            styles.statusBadge,
            novel.status === 'ongoing'
              ? styles.statusOngoing
              : styles.statusFinished,
          ]}
        >
          {novel.status === 'ongoing' ? '连载中' : '已完结'}
        </Text>
        <Text style={styles.categoryBadge}>{novel.category}</Text>
        <View style={styles.chaptersBadge}>
          <MaterialIcon name="menu-book" size={12} color={theme.textSecondary} />
          <Text style={styles.chaptersBadgeText}>{novel.chapters}章</Text>
        </View>
      </View>
    </View>
  );
};

export default BookMeta;