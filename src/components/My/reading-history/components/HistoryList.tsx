import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../../context/ThemeContext';
import { createHistoryListStyles } from './styles/HistoryListStyles';

interface ReadingHistoryItem {
  id: string;
  title: string;
  author: string;
  cover: string;
  lastChapter: string;
  progress: number;
  lastReadTime: string;
  readingTime: string;
  category: string;
}

interface HistoryListProps {
  historyItems: ReadingHistoryItem[];
  onItemPress?: (item: ReadingHistoryItem) => void;
  onDeleteItem?: (itemId: string) => void;
  onContinueReading?: (item: ReadingHistoryItem) => void;
}

export const HistoryList: React.FC<HistoryListProps> = ({
  historyItems,
  onItemPress,
  onDeleteItem,
  onContinueReading
}) => {
  const { theme } = useTheme();
  const styles = createHistoryListStyles(theme);

  const renderHistoryItem = ({ item }: { item: ReadingHistoryItem }) => (
    <TouchableOpacity
      style={styles.historyItem}
      onPress={() => onItemPress?.(item)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.cover }} style={styles.bookCover} />
      
      <View style={styles.bookContent}>
        <View style={styles.bookHeader}>
          <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
          <View style={styles.bookCategory}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
        </View>
        
        <Text style={styles.bookAuthor}>作者: {item.author}</Text>
        <Text style={styles.lastChapter}>最近: {item.lastChapter}</Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${item.progress}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>{item.progress}%</Text>
        </View>
        
        <View style={styles.bookFooter}>
          <View style={styles.timeInfo}>
            <Text style={styles.lastReadTime}>
              {new Date(item.lastReadTime).toLocaleDateString()}
            </Text>
            <Text style={styles.readingTime}>
              阅读时长: {item.readingTime}
            </Text>
          </View>
          
          <View style={styles.actionButtons}>
            {onContinueReading && (
              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => onContinueReading(item)}
              >
                <MaterialIcon name="play-arrow" size={16} color={theme.surface} />
                <Text style={styles.continueButtonText}>继续阅读</Text>
              </TouchableOpacity>
            )}
            
            {onDeleteItem && (
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => onDeleteItem(item.id)}
              >
                <MaterialIcon name="delete" size={16} color={theme.error} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.historyCard}>
      <View style={styles.historyHeader}>
        <View style={styles.historyTitleContainer}>
          <MaterialIcon name="history" size={20} color={theme.primary} />
          <Text style={styles.historyTitle}>阅读历史</Text>
        </View>
        <Text style={styles.historyCount}>{historyItems.length} 本书</Text>
      </View>
      
      <FlatList
        data={historyItems}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};