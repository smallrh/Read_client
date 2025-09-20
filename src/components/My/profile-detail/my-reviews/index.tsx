import React, { useState } from 'react';
import { 
  View, 
  ScrollView,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../../../context/ThemeContext';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import { createStyles } from '../shared/styles';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const MyReviews: React.FC = () => {
  const { theme, isDarkMode } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const styles = createStyles(theme);

  const reviews = [
    {
      id: 1,
      bookTitle: '《霸道总裁的贴身保镖》',
      rating: 5,
      comment: '剧情紧凑，人物刻画生动，非常精彩的一部小说！强烈推荐！',
      date: '2024-03-20',
      likes: 12
    },
    {
      id: 2,
      bookTitle: '《重生之都市修仙》',
      rating: 4,
      comment: '设定新颖，主角成长线很棒，就是有些情节略显拖沓。',
      date: '2024-03-15',
      likes: 8
    },
    {
      id: 3,
      bookTitle: '《全职高手》',
      rating: 5,
      comment: '电竞题材写得很好，专业性强，热血沸腾，值得一看再看！',
      date: '2024-03-10',
      likes: 25
    },
    {
      id: 4,
      bookTitle: '《斗破苍穹》',
      rating: 4,
      comment: '经典玄幻小说，升级爽文的代表作，虽然套路但很好看。',
      date: '2024-03-05',
      likes: 15
    }
  ];

  const handleBack = () => {
    navigation.goBack();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <MaterialIcon
        key={index}
        name={index < rating ? 'star' : 'star-border'}
        size={16}
        color="#F59E0B"
        style={{ marginRight: 2 }}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content"} 
        backgroundColor={theme.background} 
      />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={handleBack}
          style={styles.backButton}
          activeOpacity={0.7}
        >
          <MaterialIcon name="arrow-back" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>我的评价</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Stats Card */}
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>评价统计</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{reviews.length}</Text>
              <Text style={styles.statLabel}>评价数量</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{reviews.reduce((sum, review) => sum + review.likes, 0)}</Text>
              <Text style={styles.statLabel}>获得点赞</Text>
            </View>
          </View>
        </View>

        {/* Reviews List */}
        <View style={styles.contentCard}>
          <Text style={styles.cardTitle}>我的评价</Text>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Text style={styles.bookTitle}>{review.bookTitle}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              
              <View style={styles.ratingContainer}>
                {renderStars(review.rating)}
              </View>
              
              <Text style={styles.reviewComment}>{review.comment}</Text>
              
              <View style={styles.reviewFooter}>
                <View style={styles.likesContainer}>
                  <MaterialIcon name="thumb-up" size={16} color={theme.primary} />
                  <Text style={styles.likesText}>{review.likes}</Text>
                </View>
                <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
                  <MaterialIcon name="edit" size={16} color={theme.textMuted} />
                  <Text style={styles.editButtonText}>编辑</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default MyReviews;